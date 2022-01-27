import styled from "styled-components"
import Link from "next/link"

const Container = styled.div`
    font-family: 'Flamenco', cursive;
    border: thin solid #1a1a1a;
    padding: 25px 15px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
    flex: 1 1 1px;
    h1 {
        font-size: 25px;
        font-weight: bolder;
        margin-bottom: 15px;
    }
    h2 {
        font-size: 16px;
        flex-grow: 1;
        margin-bottom: 30px;
    }
    h3 {
        border: thin solid #1a1a1a;
        padding: 10px 15px;
        display:inline;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    a, a:visited {
        color: inherit;
        text-decoration-style: wavy;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
    }
    &:nth-child(even){
        background: #1a1a1a;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        color: white;
        h3 {
            border: thin solid white;
            padding: 10px 15px;
            display:inline;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;

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

const Repository = ({ name, description, homepage, language, html_url}) => {

    return <Container>
       
        <h1><Link href={homepage || html_url}><a target="_blank">{name}</a></Link></h1>
        <h2>{description}</h2>
        <div>
            <h3>{language}</h3>
        </div>
            
        <GitHub>
            <Link href={html_url}><a target="_blank"><i class="bi bi-github"></i></a></Link>
        </GitHub>
     
    </Container>

}

export default Repository