import styled from "styled-components"
import Repositories from "../components/repositories"
import Repository from "../components/repository/Repository"
import Socials from "../components/socials"
import Container from "../layout/Container"
import Header from "../layout/Header"
import Page from "../layout/Page"

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`


const Home = ({repos}) => {

  return <Page>
    <Container>
      <Header />
      <Repositories repos={repos} />
      <Socials />
    </Container>
    
  </Page>

}

export const getServerSideProps = async() => {

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

}

export default Home