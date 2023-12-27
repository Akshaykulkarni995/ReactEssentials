const conf = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteprojectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwritedatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
  appwritebucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID),
  appwritecollectionId:String(process.env.REACT_APP_APPWRITE_COLLECTION_ID)
};

export default conf;
