import styled from "styled-components"

const Head = styled.div`
    padding: 30px 0px;
    border-bottom: 1px solid #1A1A1A;
    border-top: 1px solid #1A1A1A;
    margin-bottom: 30px;
    margin-top: 20px;

    @media (min-width: 768px) { 
        margin-top: 30px;
    }

    @media (min-width: 1200px) {
        margin-top: 50px;
    }

`

const Brand = styled.div`
    font-family: 'Flamenco', cursive;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @media (min-width: 768px) { 
        font-size: 50px;
    }

    @media (min-width: 1200px) {
        font-size: 70px;
    }
`

const Strapline = styled.div`
    font-family: 'Flamenco', cursive;
    text-transform: uppercase;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
    display: none;
    @media (min-width: 1200px) {
        display: flex;
    }
    
    >div {
        padding: 5px 10px;
        font-size: 20px;
        text-align: center;
        border: thin solid #1a1a1a;
        position: relative;
        background: ##FAEACB;
        z-index: 3;
       
         &:before {
             width: 32px;
            height: 1px;
             background: #1a1a1a;
             content: '';
             position:absolute;
             right: -32px;
             top:50%;
            z-index: 1;
        }
     

        &:nth-child(odd){
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        &:nth-child(2n){
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        &:last-child {
            &:before {
                display: none;
            }
        }
    }
`

const Header: React.FC = () => {

    const name = "Connor Simpson"

    return <>
        <Head>   
            <Brand>
                {[...name].map( (letter, index) => <div key={index}>{letter}</div>)}
            </Brand>
        </Head>
        <Strapline>
            <div>Node</div>
            <div>PHP</div>
            <div>React</div>
            <div>Laravel</div>
            <div>NextJS</div>
            <div>PWA</div>
            <div>Python</div>
            <div>REST</div>
            <div>Graphql</div>
        </Strapline>
    </>
}

export default Header