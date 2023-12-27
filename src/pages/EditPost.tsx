import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import appwriteService from "../appwrite/config"
import Container from '../components/container/Container';
import PostForm from '../components/post-form/PostForm';

const EditPost = () => {
  const [post,setpost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()


  useEffect(()=>{

    if(slug){
      appwriteService.getPost(slug).then((post)=>{
        if(post){
          setpost(post)
        }else{
          navigate("/")
        }
      })
    }

  },[slug,navigate])
  return (
    <div className='py-6'>
<Container>
  <PostForm post={post} />
</Container>
      
    </div>
  )
}

export default EditPost
