import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class PostForm extends React.Component {
    
    state = {
        userId: '',
        title: '',
        body: ''
    }

    handleInputChange = (type, value) => {
        if (type === 'userId') {
            this.setState({
                userId: value
            })
        }
        if (type === 'title') {
            this.setState({
                title: value
            })
        }
        if (type === 'body') {
            this.setState({
                body: value
            })
        }
    }

    handleSubmitButton = (e) => {
        e.preventDefault();
        Axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: {
                userId: this.state.userId,
                title: this.state.title,
                body: this.state.body
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center' style={{ marginTop: "20px" }}>Form</h1>
                <div className='row justify-content-center'>
                    <form className='col-6' onSubmit={this.handleSubmitButton}>
                        <div className="form-group">
                            <label >UserID<span className='text-danger'>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter userID"
                                onChange={(event) => { this.handleInputChange('userId', event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label >Post title<span className='text-danger'>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Post title" 
                                onChange={(event) => { this.handleInputChange('title', event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label >Post body</label>
                            <textarea
                                type="text"
                                rows="5"
                                className="form-control"
                                placeholder="Enter Post body" 
                                onChange={(event) => { this.handleInputChange('body', event.target.value) }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PostForm);