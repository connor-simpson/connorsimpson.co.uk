import styled from "styled-components"

type PetalType = {
    firstAsNew: boolean,
    stems: boolean
}

const Petal = styled.div<PetalType>`
    font-family: 'Flamenco', cursive;
    border: thin solid #1a1a1a;
    padding: 25px 15px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
    width: 100%;


    @media (min-width: 1200px) {
        flex: 1 1 21%;
    }
    
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
        ${props =>{ 
            if(props.stems){
                return `
                    &:after {
                        content: '';
                        background: #1a1a1a;
                        height: 1px;
                        width: 14px;
                        position: absolute;
                        top: 70%;
                        left: -14px;
                    }
                `
            }
        }}
    }
    ${props =>{ 
        if(props.stems){
            return `
                &:after {
                    content: '';
                    background: #1a1a1a;
                    height: 1px;
                    width: 14px;
                    position: absolute;
                    top: 50%;
                    right: -14px;
    
                }
            `
        }
    }}
    ${props => {
        if(props.firstAsNew){
            return `
            &:first-child{
                &:before {
                    content: '!!!';
                    background: red;
                    position: absolute;
                    top: -10px;
                    left: 15px;
                    border-top-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    padding: 2px 10px;
                    color: white;
                    letter-spacing: 3px;
                    text-align: center;
                }
            }
            `
        }
    }}
`

export default Petal 