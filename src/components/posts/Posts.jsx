import './posts.scss';
import React from 'react'
import Post from '../post/Post'
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], async ()=>{
       return makeRequest.get("/posts").then((res)=>{
        return res.data;
      });
  });
  console.log(data)
  return (
    <div className='posts'>
      {error
      ? "Something went wrong!"
      : isLoading
      ? "loading"
      : data.map((post)=><Post post={post} key={post.id}/>)
      }
    </div>
  )
}

export default Posts
