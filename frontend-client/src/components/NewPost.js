import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PostContext from '../contexts/PostContext';
import { ListGroup, Stack } from 'react-bootstrap';
import PostList from './PostList';

const NewPost = () => {
    let [ newPost, setNewPost ] = useState({
        username: "",
        location: "",
        socialPost: "",
        
    });

    let { addPost } = useContext(PostContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewPost((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addPost(newPost).then(() => {
            navigate('/post');
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <h1> Pop Post Feed </h1>
        <span> Post!  </span>
        <input placeholder="New pop post" type="textbox" name="socialPost" value={newPost.socialPost} onChange={handleChange} />
        <br></br><br></br>
        <span></span>
        <Stack direction='horizontal' gap={3}>
            <ListGroup className='w-75'>
                {PostList()}
            </ListGroup>
        </Stack>
        <button>Create New Pop Post</button>
    </form>

    )
};

export default NewPost;