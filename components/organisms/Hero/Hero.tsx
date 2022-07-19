import Image from "next/image"
import styled from "styled-components"

const Wrapper = styled.div`
    background: url(/watercolour.png) no-repeat center center;
    font-family: 'Flamenco', cursive;
    font-size: 50px;
    text-align: center;
    font-weight: 100;
    padding: 100px 0px;
`

const randomPhrases = [
    "with an acute addiction to coffee.",
    "and an Akali main on League of Legends.",
    "and I hit platinum in League of Legends in 2022",
    "and a Jett main on Valorant.",
    "and I tweet too much.",
    "who likes Lana del Rey.",
    "with too much time on their hands.", 
    "who likes Disaronno and Coke.",
    "and hotpot is not a stew, it&apos;s got a crust.",
    "who prefers Coke over Pepsi.",
    "who thinks &apos;sport&apos; is just another type of Lucozade.",
]

const Hero: React.FC = () => {

    const x = true;

    return <Wrapper>
     
    
        <h1>I&apos;m a software engineer from Manchester, {randomPhrases[Math.floor(Math.random()*randomPhrases.length)]}</h1>
    </Wrapper>
}

export default Hero