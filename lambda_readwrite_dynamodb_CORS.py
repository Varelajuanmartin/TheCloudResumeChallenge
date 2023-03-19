import json
import boto3

ddb = boto3.client('dynamodb')

def lambda_handler(event, context):
    page_name = "1"
    count_key = {'PageName': {'S': page_name}}
    update_expression = 'ADD #count :incr'
    expression_attribute_names = {'#count': 'Count'}
    expression_attribute_values = {':incr': {'N': '1'}}
    return_values = 'UPDATED_NEW'

    response = ddb.update_item(
        TableName='VisitorCount',
        Key=count_key,
        UpdateExpression=update_expression,
        ExpressionAttributeNames=expression_attribute_names,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues=return_values
    )
    
    new_count = response['Attributes']['Count']['N']
    print(f"Visitor count for page {page_name} updated to {new_count}")
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'Count': int(new_count)
        }),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }
    }
