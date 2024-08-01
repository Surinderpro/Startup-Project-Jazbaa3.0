import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Configure the AWS SDK
AWS.config.update({ region: 'ap-south-1' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const params = {
      TableName: 'Users',
      Key: {
        email,
      },
    };

    try {
      const result = await dynamoDb.get(params).promise();
      console.log('DynamoDB response:', result);

      const user = result.Item;

      if (!user) {
        console.log('User not found for email:', email);
        return res.status(400).json({ error: 'User not found' });
      }

      if (user.password !== password) {
        console.log('Password mismatch for user:', email);
        return res.status(401).json({ error: 'Incorrect password' });
      }

      const username = email.split('@')[0];

      console.log('User authenticated successfully:', email);
      res.status(200).json({ success: true, message: 'Sign in successful', user: { username } });
    } catch (error) {
      console.error('Error accessing DynamoDB:', error);
      res.status(500).json({ error: 'Could not sign in' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
