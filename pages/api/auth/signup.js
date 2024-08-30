import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../../lib/mongodb';

export default async (req, res) => {
    const { db } = await connectToDatabase();

    if (req.method === 'POST') {
        const { email, password } = req.body;
        const hashedPassword = await hash(password, 12);
        await db.collection('users').insertOne({ email, password: hashedPassword });
        res.status(201).json({ message: 'User created' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};