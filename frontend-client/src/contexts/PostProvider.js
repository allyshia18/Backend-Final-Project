import axios from "axios";
import { useEffect, useState } from "react";
import PostContext from "./PostContext";

export const PostProvider = (props) => {

    const [ post, setPost ] = useState([]);
    const baseUrl = "http://localhost:3000/api/post/";

    useEffect(() => {
        async function fetchData() {
            await getAllPost();
        }
        fetchData();
    }, []);

    function getAllPost() {
        return axios.get(baseUrl).then(response => setPost(response.data));
    }

    function getPost(id) {
        return axios.get(baseUrl + id).then(response => {
            return new Promise(resolve => resolve(response.data));
        });
    }

    function addPost(post) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myPostToken')}`
        };
    
        return axios.post(baseUrl, post, { headers: myHeaders })
            .then(response => {
                getAllPost();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editPost(post) {
        return axios.put(baseUrl + post.id, post).then(response=> {
            getAllPost();
            return new Promise(resolve => resolve(response.data));
        })
                
    }

    function deletePost(id) {
        return axios.delete(baseUrl + id).then(response => {
            getAllPost();
            return new Promise(resolve => resolve(response.data));
        });
    }

    return (
        <PostContext.Provider value={{
            post,
            getPost,
            addPost,
            editPost,
            deletePost
        }}>
            { props.children }
        </PostContext.Provider>
    )
};