import React from 'react';
import PostContext from '../contexts/PostContext';
import { Link } from 'react-router-dom';


const PostList = () => {
    return (
        <PostContext.Consumer>
            {
            ({ post }) => {
                return <div>
                    <h1>Pop Post List</h1>
                    <Link to="/post/new">Add New Post</Link>
                    {/* {console.log(post)} */}
                    <div>
                        {post.map((p) => {
                            return (
                                <div class = "popmessage" >
                                    <h3>{p.socialpost} | ${p.username}</h3>
                                    <p>{p.location}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        }
        </PostContext.Consumer>
    );
};

export default PostList;