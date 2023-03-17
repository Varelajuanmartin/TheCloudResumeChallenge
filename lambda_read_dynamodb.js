const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

exports.handler = async (event) => {
  const params = {
    TableName: 'VisitorCount',
    Key: {
      'PageName': { S: '1' }
    }
  };
  
  try {
    const data = await dynamodb.getItem(params).promise();
    
    const Count = data.Item.Count.N;
    console.log(`Counter value: ${Count}`);
    return Count;
  } catch (err) {
    console.log(err);
    return err;
  }
};

