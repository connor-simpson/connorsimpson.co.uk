import Lead from "../../components/atoms/Lead/index"
import Blog from "../../components/organisms/Blog"
import Container from "../../layout/Container"
import Header from "../../layout/Header"
import Page from "../../layout/Page"
import { getDatabase } from "../../lib/notion"
import type { NextPage } from 'next'

type ArchiveType = {
    posts: any
}

const databaseId = process.env.NOTION_DATABASE_KEY

const Archive: NextPage<ArchiveType> = ({ posts }) => {
    return <Page title="Archive | Connor Simpson">
        <Container>
            <Header />
            <Blog leadText={`Journal Archive`} showActions={false} posts={posts} />
        </Container>
    </Page>
}

export const getStaticProps = async () => {

    const database = await getDatabase(databaseId)
  
    return {
      props: {
        posts: database
      },
      revalidate: 1
    }
  
  }

export default Archive