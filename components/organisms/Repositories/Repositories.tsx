import Lead from "../../atoms/Lead"
import Petal from "../../atoms/Petal"
import Button from "../../atoms/Button"
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
    position: relative;
    @media (min-width: 768px) {
        &:before {
            height:calc(100% + 25px);
            content: '';
            width: 1px;
            position:absolute;
            background: #1a1a1a;
            left: 50%;
            top: 0;
        }

        &:after {
            width: 7px;
            height: 7px;
            position:absolute;
            background: #1a1a1a;
            top: 0px;
            left: calc(50% - 3px);
            content: '';
            border-radius: 10px;
        }
    }
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

const Actions = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
`

const Repositories: React.FunctionComponent<RepositoriesType> = ({ repos }) => {
    return <>
        <Lead>Projects</Lead>
        <Wrapper>
        {repos.map(repo => {
            
            const { homepage, html_url, name, description, language } = repo;
            if(name === 'connorsimpson.co.uk') return;
            return <Petal stems={true} key={repo.id}>
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
        <Actions>
            <Button><Link href={`https://github.com/connor-simpson`}><a target="_blank">View my profile</a></Link></Button>
        </Actions>
    </>
}

export default Repositories