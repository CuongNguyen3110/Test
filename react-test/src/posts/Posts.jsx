import React from 'react';
import axios from 'axios';

class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                posts: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        let posts = this.state.posts.map((post) => {
            return (
                <div key={post.id} className='col-12 card' style={{marginTop: '20px'}}>
                    <div className='card-body'>
                        <h5 className='card-title'>Post title: {post.title}</h5>
                        <h6>User: {post.userId}</h6>
                        <h6>PostID: {post.id}</h6>
                        <p>Post body: {post.body}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className='container'>
                <h1 className='text-center' style={{marginTop: '30px'}}>POSTS</h1>
                {posts}
            </div>
        )
    }
}

export default Posts;