import styled from "styled-components"
import Repository from "../components/repository/Repository"
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
      <Flex>
        {repos.map( (repo, index) => {
          if(repo.name === 'connorsimpson.co.uk') return
          return <Repository key={index} {...repo} /> 
        })}
      </Flex>
    </Container>
    
  </Page>

}

export const getServerSideProps = async() => {

  const github = await fetch("https://api.github.com/users/connor-simpson/repos");
  const repos = await github.json()

  return {
    props: {
      repos: repos
    }
  }

}

export default Home