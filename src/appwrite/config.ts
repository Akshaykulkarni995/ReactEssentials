import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases: any;
  bucket: any;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteprojectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug: any) {
    try {
      return await this.databases.getDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug
      );
    } catch (error) {
      console.log("getpost", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        queries
      );
    } catch (error) {
      console.log("getPosts", error);
    }
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }: any) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("in create post :", error);
      return false;
    }
  }

  async updatePost(
    slug: any,
    { title, content, featuredImage, status, userId }: any
  ) {
    try {
      return await this.databases.updatePost(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("in updatepost", error);
      return false;
    }
  }

  async deletePost(slug: any) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("in delete post", error);
      return false;
    }
  }

  // const client = new Client();

  // const databases = new Databases(client);

  // client
  //   .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  //   .setProject("5df5acd0d48c2"); // Your project ID

  //storage services

  async uploadFile(file: any) {
    try {
      return await this.bucket.createFile(
        conf.appwritebucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("in upload file", error);
      return false;
    }
  }

  async deleteFile(fileId: any) {
    try {
      return await this.bucket.deleteFile(conf.appwritebucketId, fileId);
    } catch (error) {
      console.log("in deletefile", error);
      return false;
    }
  }

  // async filePreview(fileId: any) {
  //   try {
  //    return this.bucket.getFilePreview(conf.appwritebucketId, fileId)
  //       .href;
  //   } catch (error) {
  //     console.log("fileprevie", error);
  //   }
  // }
  filePreview(fileId: any) {
    return this.bucket.getFilePreview(conf.appwritebucketId, fileId).href;
  }
}

const service = new Service();
export default service;
