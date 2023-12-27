import React from "react";
import { Link } from "react-router-dom";
import appWriteService from "../appwrite/config"

interface Props {
  $id: any;
  title: string;
  featuredImage: any;
}

const PostCard = ({ $id, title, featuredImage }: Props) => {
  return <Link to={`/posts/${$id}`}>
    <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img className='rounded-xl' src={appWriteService.filePreview(featuredImage)} ></img>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
    </div>
  </Link>;
};

export default PostCard;
