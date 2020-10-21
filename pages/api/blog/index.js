
import data from '../../../blog.json'

export const blogPostBySlug = (req, res) => {

    let post = null
    data.map( (obj, key) => {
        if(obj.slug === req.query.slug){
            post = obj
        }
    })

    if(!post){
        res.status(404)
        res.end()
        return
    }

    res.status(200)
    res.send(JSON.stringify(post))
}

export default blogPostBySlug