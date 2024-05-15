import React, {useState, useEffect} from 'react'
import './GetAllBlogsComponent.css'
import BlogComponent from './BlogComponent'

function GetAllBlogsComponent() {
    const [blog, setBlog] = useState([])

    const fetchAllBlogs  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/blogs')
        const data = await response.json()
        setBlog(data)
    }

    useEffect(() => {
        fetchAllBlogs()
    }, [])

  return (
    <div className='blog'>
        {blog.map(blogItem=>(
            <BlogComponent blogItem={blogItem}/>
        ))}
    </div>
  )
}

export default GetAllBlogsComponent