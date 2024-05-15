import React, { Component } from 'react'
import './AddNewBlogComponent.css'

class AddNewBlogComponent extends Component {
  constructor(props)
    {
        super(props)

        this.state = {
            blogTitle: '',
            blogID:'',
            blogArticle: '',
            blogAuthor: '',
            blogCategory: ''
        }
    }

    blogTitleHandler = (event) => {
        this.setState({
            blogTitle : event.target.value
        })
    }
    blogIDHandler = (event) => {
        this.setState({
            blogID : event.target.value
        })
    }
    blogArticleHandler = (event) => {
        this.setState({
            blogArticle : event.target.value
        })
    }
    blogAuthorHandler = (event) => {
        this.setState({
            blogAuthor : event.target.value
        })
    }
    blogCategoryHandler = (event) => {
        this.setState({
            blogCategory : event.target.value
        })
    }

    
    formSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/blogs',{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            blogTitle: this.state.blogTitle,
            blogID:this.state.blogID,
            blogArticle: this.state.blogArticle,
            blogAuthor: this.state.blogAuthor,
            blogCategory: this.state.blogCategory
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message)
            {
                alert(data.message)
            }
            else{
                alert(`The new blog on ${data.blogCategory} is added successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {blogTitle, blogID, blogArticle, blogAuthor, blogCategory} = this.state
    return (
        <form className='form-container' onSubmit={this.formSubmitHandler}>
            <h2>Adding new blog</h2>

        <div className='form-group'>
            <label>Blog Title</label>
            <input
            type='text'
            placeholder='Enter the blog title'
            value={blogTitle}
            onChange={this.blogTitleHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Blog ID</label>
            <input
            type='text'
            placeholder='Enter the blog ID'
            value={blogID}
            onChange={this.blogIDHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Blog Article</label>
            <textarea
            type='text'
            rows='10'
            placeholder='Enter the company name'
            value={blogArticle}
            onChange={this.blogArticleHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Blog Author</label>
            <input
            type='text'
            placeholder='Enter the blog author'
            value={blogAuthor}
            onChange={this.blogAuthorHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Blog Category</label>
            <select
            value={blogCategory}
            onChange={this.blogCategoryHandler}
            required
            >
            <option value="">-- Please select --</option>
            <option value="Technology">Technology</option>
            <option value="Fitness">Fitness</option>
            <option value="Fashion">Fashion</option>
            <option value="Entertainment">Entertainment</option>
            </select>
        </div>

        <div>
            <button type='submit'>Add</button>
        </div>
        </form>
        
    )
  }
}

export default AddNewBlogComponent