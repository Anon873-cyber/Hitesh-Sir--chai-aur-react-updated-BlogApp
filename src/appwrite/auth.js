import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {

        try {
            return await this.account.create({userId:ID.unique(), email, password, name});

        } catch (error) {
           
            return null
        }

    }

    async login({ email, password }) {
       
        try {
            return await this.account.createEmailPasswordSession({ email, password })

        } catch (error) {
            console.error(error)
            return null
        }

    }

    async getCurrentUser() {
      
        try {
            return await this.account.get()
        } catch (error) {
            console.error(error)
            return null
        }

    }

    async logOutUser() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.error(error)
            return null
        }
    }

}

const authService = new AuthService();


export default authService;

