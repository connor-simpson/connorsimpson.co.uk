import Blog from "../components/organisms/Blog"
import Container from "../layout/Container"
import Header from "../layout/Header"
import Page from "../layout/Page"
import { getDatabase } from "../lib/notion"
import type { NextPage } from 'next'
import Repositories from "../components/organisms/Repositories"

type HomeType = {
  posts: [any],
  repos: [any]
}

const databaseId = process.env.NOTION_DATABASE_KEY

const Home: NextPage<HomeType> = ({ posts, repos }) => {

  return <Page title="Connor Simpson">
    <Container>
      <Header />
      <Blog leadText={`Journal`} showActions={true} posts={posts} />
      <Repositories repos={repos} />
    </Container>  
  </Page>

}

export const getStaticProps = async () => {

  const github = await fetch("https://api.github.com/users/connor-simpson/repos")
  const repositories = await github.json()

  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
      repos: repositories
    },
    revalidate: 1
  }

}

export default Home