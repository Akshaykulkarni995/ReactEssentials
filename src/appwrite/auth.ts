import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account: any;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteprojectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }: any) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch {}
  }
  
  async login({ email, password }: any) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async currentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Service error in currentUser()", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("error in logout", error);
    }
  }
}

const authService = new AuthService();

export default authService;
