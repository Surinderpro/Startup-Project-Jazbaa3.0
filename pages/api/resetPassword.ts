import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Configure the AWS SDK
AWS.config.update({ region: 'ap-south-1' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, newPassword } = req.body;

    const getUserParams = {
      TableName: 'Users',
      Key: {
        email,
      },
    };

    try {
      const result = await dynamoDb.get(getUserParams).promise();
      const user = result.Item;

      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }

      const updateUserParams = {
        TableName: 'Users',
        Key: {
          email,
        },
        UpdateExpression: 'set #password = :newPassword',
        ExpressionAttributeNames: {
          '#password': 'password',
        },
        ExpressionAttributeValues: {
          ':newPassword': newPassword,
        },
      };

      await dynamoDb.update(updateUserParams).promise();

      res.status(200).json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
      console.error('Error accessing DynamoDB:', error);
      res.status(500).json({ success: false, message: 'Could not reset password' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};
