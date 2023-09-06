import blogFetach from "../axios/config";

import {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import'./Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    try{
      const response = await blogFetach.get( "/posts" );
      const data= response.data;
     
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
   
  useEffect(() =>{
    getPosts();
  },[]);

  return(
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carrgando...</p>
         ) : (
        posts.map((post)=>  (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.bady}</p>
            <Link to={`/posts/${post.id}`} className='btn'
            >Ler mais</Link>
          </div>
         ))
        )}
    </div>
    );
  };

export default Home;