import Page from "../../layout/Page"
import Container from "../../layout/Container"
import Header from "../../layout/Header"
import { getPage, getBlocks, getDatabase } from "../../lib/notion"
import Block from "../../components/atoms/Block"
import Lead from "../../components/atoms/Lead"
import type { NextPage } from 'next'

type PostType = {
    page: any,
    blocks: any
}

const databaseId = process.env.NOTION_DATABASE_KEY

const Post: NextPage<PostType> = ({ page, blocks }) => {
    if(!page){
        return <p>An error occurred</p>
    }
    return <Page title="Connor Simpson">
    <Container>
      <Header />
      <Lead>{page?.properties?.Name?.title[0]?.plain_text}</Lead>
      {blocks.map(block => {
        return <Block key={block.id} block={block} />
      })}
    </Container>  
  </Page>
}

export const getStaticPaths = async () => {
    const database = await getDatabase(databaseId);
    return {
      paths: database.map((page) => ({ params: { id: page.id } })),
      fallback: true,
    };
  };

export const getStaticProps = async (context) => {
    const { id } = context.params
    const page = await getPage(id)
    const blocks = await getBlocks(id)

    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          }
        })
    )
    const blocksWithChildren = blocks.map((block) => {
      if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
          (x) => x.id === block.id
        )?.children
      }
      return block
    })
  
    return {
      props: {
        page,
        blocks: blocksWithChildren,
      },
      revalidate: 1,
    }
  }
  

export default Post