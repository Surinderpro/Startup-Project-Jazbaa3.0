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
      Item: {
        email,
        password,
      },
    };

    try {
      await dynamoDb.put(params).promise();
      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
