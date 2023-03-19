const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

exports.handler = async (event) => {
  const pageName = "1";
  
  // Construct the update parameters
  const params = {
    TableName: 'VisitorCount',
    Key: {
      'PageName': { S: pageName }
    },
    UpdateExpression: 'SET #count = #count + :incr',
    ExpressionAttributeNames: {
      '#count': 'Count'
    },
    ExpressionAttributeValues: {
      ':incr': { N: '1' }
    },
    ReturnValues: 'UPDATED_NEW'
  };
  
  // Set the CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Perform the update operation
  const result = await dynamodb.updateItem(params).promise();
  const count = result.Attributes.Count.N;
  
  return {
    statusCode: 200,
    body: `Visitor count updated to ${count}`
  };
};
