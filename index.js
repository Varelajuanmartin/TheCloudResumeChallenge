// THIS SOURCE CODE I PASS IT TO LAMDBA. TEST DYNAMODB TABLE

const AWS = require ('aws-sdk');
const TABLE = "CT_Contacts"
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1'
});
exports.handler = async (event) => {
 
 const _id = "id_12345";
 
 const params = {
   TableName: TABLE,
   Key: {
     "UserId": _id
   }
 };
 
 const data = await dynamoDb.get(params).promise();
 const response = {
   isBase64Encoded: false,
   headers: {"Content-Type": "application/json"}
 };
 
 if ((typeof data) === "object") {
   response.statusCode = 200;
   response.body = JSON.stringify(data);
 } else {
   response.statusCode = 500;
 }
 return response;
};