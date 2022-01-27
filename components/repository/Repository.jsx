import styled from "styled-components"
import Link from "next/link"

const Container = styled.div`
    font-family: 'Flamenco', cursive;
    border: thin solid #1a1a1a;
    padding: 25px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    flex: 1 0 21%;
    position: relative;
    h1 {
        font-size: 25px;
        margin-bottom: 15px;
        font-weight: bolder;
    }
    h3 {
        font-size: 20px;
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
    }
`

const Repository = ({ name, description, homepage, language }) => {

    return <Container>
        <h1><Link href={homepage}><a>{name}</a></Link></h1>
        <h3>{description}</h3>
    </Container>

}

export default Repository