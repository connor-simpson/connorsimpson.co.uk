import Lead from "../../atoms/Lead"
import Petal from "../../atoms/Petal"
import styled from "styled-components"
import Link from "next/link"

type RepositoriesType = {
    repos: [any]
}

const Wrapper =  styled.div`
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    display: grid;
    gap: 25px;
    margin-bottom: 25px;
`

const GitHub = styled.div`
    width: 50px;
    height: 50px;
    font-size: 30px;
    align-self: flex-end;
    position: absolute;
    right: -10px;
    top: 10px;
`

const Repositories: React.FunctionComponent<RepositoriesType> = ({ repos }) => {
    return <>
        <Lead>Projects</Lead>
        <Wrapper>
        {repos.map(repo => {
            
            const { homepage, html_url, name, description, language } = repo;
            if(name === 'connorsimpson.co.uk') return;
            return <Petal key={repo.id}>
                <h1><Link href={homepage || html_url}><a target="_blank">{name}</a></Link></h1>

                <h2>{description}</h2>

                <div>
                    <h3>{language}</h3>
                </div>
                    
                <GitHub>
                    <Link href={html_url}><a target="_blank"><i className="bi bi-github"></i></a></Link>
                </GitHub>
            </Petal>

        })}
        </Wrapper>
    </>
}

export default Repositories