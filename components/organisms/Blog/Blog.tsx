import Lead from "../../atoms/Lead/index"
import Petal from "../../atoms/Petal/Petal"
import styled from "styled-components"
import Link from "next/link"
import Button from "../../atoms/Button/Button"

type BlogType = {
    posts: [any]
}

const Wrapper =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 25px;
`
const Actions = styled.div`
    display: flex;
    justify-content: center;
`
const Blog: React.FC<BlogType> = ({ posts }) => {
    return <>
        <Lead>Journal</Lead>
        <Wrapper>
            {posts.map(post => {
                console.log(post)
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
        <Actions>
            <Button>View all posts</Button>
        </Actions>
    </>

}

export default Blog