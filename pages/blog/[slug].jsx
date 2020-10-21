
import React from 'react'

import fetch from 'isomorphic-unfetch'

const Post = ({ post }) => (<p>{JSON.stringify(post)}</p>)

Post.getInitialProps = async ({ query: { slug } }) => {
    
    const res = await fetch(`http://localhost:3000/api/blog?slug=${slug}`)
    
    console.log(res.status)
    if(res.status === 404){
         return {}
    }
    
    const json = await res.json()


    return {
        post: json
    }

    /*const res = await blogPostBySlug(query.slug)
    const json = await res.json()
    return {
        post: json
    }*/
}

export default Post