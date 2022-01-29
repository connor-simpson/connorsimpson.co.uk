import styled from "styled-components"
import Lead from "../../layout/Lead"
import Repository from "../repository/Repository"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const Repositories = ({ repos }) => {
    return <>
        <Lead>Projects</Lead>
        <Flex>
            {repos.map( (repo, index) => {
            if(repo.name === 'connorsimpson.co.uk') return
            return <Repository key={index} {...repo} /> 
            })}
      </Flex>
    </>
}

export default Repositories