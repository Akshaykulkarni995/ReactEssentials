import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'


const AllPosts = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{

    appwriteService.getPosts([]).then((posts)=>{
      if(posts){
        console.log("data",posts);
        setPosts(posts.documents)
      }
    })
  },[])
  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>Login to read</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-8'>
      <Container >
        <div className='flex flex-wrap'>
    {posts.map((post:any)=>(
      <div className='p-2 w-1/4' key={post.$id}>
        <PostCard {...post}>

        </PostCard>
      </div>
    ))}
        </div>
      </Container>
     
    </div>
  )
}

export default AllPosts
