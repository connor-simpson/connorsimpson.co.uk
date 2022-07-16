import styled from "styled-components"
import Button from "../components/atoms/Button/Button"
import Blog from "../components/organisms/Blog"
import Container from "../layout/Container"
import Header from "../layout/Header"
import Page from "../layout/Page"
import { getDatabase } from "../lib/notion"

type HomeType = {
  posts: [any]
}

const databaseId = process.env.NOTION_DATABASE_KEY

const Home: NextPage<HomeType> = ({ posts }) => {

  return <Page title="Connor Simpson">
    <Container>
      <Header />
      <Blog posts={posts} />
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

export default Home