import styled from "styled-components"
import Lead from "../components/atoms/Lead/index"
import Container from "../layout/Container"
import Header from "../layout/Header"
import Page from "../layout/Page"


const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Home: NextPage = ({repos}) => {

  return <Page title="Connor Simpson">
    <Container>
      <Header />
      <Lead>Blog</Lead>
      <Lead>Projects</Lead>
      <Lead>Socials</Lead>
    </Container>  
  </Page>

}
/*
export const getServerSideProps = async() => {


  console.log(process.env.NOTION_API_KEY)


  const github = await fetch("https://api.github.com/users/connor-simpson/repos")
  const repos = await github.json()

  const githubUser = await fetch("https://api.github.com/users/connor-simpson/repos")
  const user = await githubUser.json()

  return {
    props: {
      repos,
      user
    }
  }

}*/

export default Home