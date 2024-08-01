import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Configure the AWS SDK
AWS.config.update({ region: 'ap-south-1' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    const putItemParams = {
      TableName: 'EmailSubscribe',
      Item: {
        email, // Primary key
        subscribedAt: new Date().toISOString(),
      },
    };

    try {
      await dynamoDb.put(putItemParams).promise();
      res.status(200).json({ success: true, message: 'Email subscribed successfully' });
    } catch (error) {
      console.error('Error accessing DynamoDB:', error);
      res.status(500).json({ success: false, message: 'Could not subscribe email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};
