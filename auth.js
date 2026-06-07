import NextAuth from 'next-auth'
import clientPromise from './lib/mongo';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

const config = {
    providers : [],
    adapter : MongoDBAdapter(clientPromise),
}

export const { handlers, signIn, signOut } = NextAuth(config);