import Lead from "../../atoms/Lead/index"
import Petal from "../../atoms/Petal/Petal"
import styled from "styled-components"
import Link from "next/link"
import Button from "../../atoms/Button/Button"

type BlogType = {
    posts: [any],
    leadText: string,
    showActions: boolean
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
const Actions = styled.div`
    display: flex;
    justify-content: center;
`
const Blog: React.FC<BlogType> = ({ leadText, posts, showActions }) => {
    return <>
        <Lead>{leadText}</Lead>
        <Wrapper>
            {posts.map(post => {
                const date = new Date(post.last_edited_time).toLocaleString(
                    "en-GB",
                    {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    }
                );
                
                return <Petal key={post.id} firstAsNew={true}>
                    <h1><Link href={`/blog/${post.id}`}><a>{post.properties.Name.title[0].plain_text}</a></Link></h1>
                    <h2>{post.properties.Excerpt?.rich_text[0]?.plain_text}</h2>
                    <div>
                        <h3>{date}</h3>
                    </div>
                </Petal>
            })}
        </Wrapper>
        {showActions && 
            <Actions>
                <Button><Link href={`/blog`}><a>View all posts</a></Link></Button>
            </Actions>
        }   
    </>

}

export default Blog