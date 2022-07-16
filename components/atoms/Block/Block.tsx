import styled from "styled-components"
import Image from "next/image"
import { CodeBlock, zenburn } from "react-code-blocks"

type BlockType = {
    block: any
}

const P = styled.p`
    font-family: 'Flamenco', cursive;
    font-size: 25px;
    margin-bottom: 15px;
`

const Img = styled.div`
    width: 100%;
    position: relative;
    height: 500px;
    filter: grayscale(100%);
    margin-bottom: 25px;
`

const Li = styled.li`
    font-family: 'Flamenco', cursive;
    font-size: 25px;
    padding-left: 25px;
    position: relative;
    &:before {
        content: '';
        width: 7px;
        height: 7px;
        background: #1a1a1a;
        position: absolute;
        top: 8px;
        left: 4px;

    }
`
const Frame = styled.iframe`
    margin: 0 auto;
    display: table;
    margin-bottom: 25px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
    filter: grayscale(100%);
`

const Pre = styled.div`
    font-family: consolas;
    margin-bottom: 25px;
    margin-top: 25px;
`

const getEmbedUri = (videoUri) => {
    if(videoUri.indexOf("youtube") != -1){
        return `https://www.youtube.com/embed/${videoUri.replace("https://www.youtube.com/watch?v=", "")}`
    }
}

const Block: React.FC<BlockType> = ({ block }) => {
    switch(block.type){

        case "paragraph":
            return <P>{block.paragraph?.text[0]?.plain_text}</P>
        case "image":
            return <Img><Image alt={`Blog image`} src={`${block.image.external.url}`} layout="fill" /></Img>
        case "bulleted_list_item":
        case "numbered_list_item":
            return <ul>
                <Li>{block?.bulleted_list_item?.text[0]?.plain_text || block?.numbered_list_item?.text[0]?.plain_text  }</Li>
            </ul>
        case "code":
            return <Pre><CodeBlock language={block.code.language} text={block.code.text[0].text.content} theme={zenburn} /></Pre>
        case "video":
            return <Frame width="560" height="315" src={getEmbedUri(block.video.external.url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        default:
            return <p>???</p>

    }

}

export default Block