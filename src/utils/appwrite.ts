import { Client, Account } from 'appwrite';

const client = new Client();
client
    .setEndpoint(process.env.YOUR_APPWRITE_ENDPOINT!) // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID!)

const account = new Account(client);

export { client, account };