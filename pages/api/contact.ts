import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Configure the AWS SDK
AWS.config.update({ region: 'ap-south-1' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, details } = req.body;

    const putItemParams = {
      TableName: 'Contacts',
      Item: {
        email, // Primary key
        firstName,
        lastName,
        phoneNumber,
        details,
        createdAt: new Date().toISOString(),
      },
    };

    try {
      await dynamoDb.put(putItemParams).promise();
      res.status(200).json({ success: true, message: 'Inquiry sent successfully' });
    } catch (error) {
      console.error('Error accessing DynamoDB:', error);
      res.status(500).json({ success: false, message: 'Could not send inquiry' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};
