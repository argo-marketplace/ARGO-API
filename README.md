
# ARGO-API
A blueprint to rapidly APIfy and monetize public data.

## Why is this needed?
ARGO aims to to create a public data infrastructure. Creating lightweight APIs on top of some cleaned dataset allows for wide adoption, use, and revenue generation for cities.

## How is this being done?
[Replicating the  **AWS monetization article**](https://dzone.com/articles/api-monetization-framework-as-introduced-by-aws-ma) using a dirt simple Lambda function to add 2 numbers.

Steps to execute the simple add function:
1) Create a simple AWS Lambda function and then paste the index.js code in it.
2) Add a test case for input 'a' and 'b' to be added and test the output 
3) Go to API Gateway and create three models each for input, output and result, specify model schema for each of them which are provided in the repository
4) In resources section of API gateway, create resources for GET and POST request
5) For GET request: in the Method Request section specify two query strings as input 'a' and 'b' of type Number and in Method Response section add Result model with application/json
6) For POST request: in the Method Request section specify in the Request body, the Input model with content type application/json

---
### Deploying the API Overview

1) Create AWS Lamba to add two numbers.
2) Create API Gateway to invoke AWS Lambda function.
3) Allow the API Gateway to pass the two number as input to the Lambda.

---
  
1. Create AWS Lamba to add two numbers:
  - *A dirt simple  node.js application using Node.js 4.3.3*. The code is in [`addNumber.js`](https://github.com/argo-marketplace/ARGO-API/blob/master/addNumbers.js) 
  
2. Create API Gateway to invoke AWS Lambda function:
  - *When creating the Lambda function, ensure that the **trigger**  is set to API Gateway*
  - *This will create an API endpoint that allows anyone to invoke our  Lambda function*
  
3.  Allow the API Gateway to pass the two number as input to the Lambda.:
  - *After creating the API Gateway navigate to **Integration Request** , this section allow us to pass information to the lambda from an API invocation. To do this, add the code from `input.js`](https://github.com/argo-marketplace/ARGO-API/blob/master/input.js) here*
  - *Note: We are capturing the input as integer as opposed to a string to reduce the code required to add the 2 inputs*
  
We now have an endpoint to invoke our Lamba. make sure to add a parameter to the endpoint:
  - *Example: endpointURL?number1=10&number2=7*
  - *Now you just enter this URL with the parameters into a browser to get a result from the invoked lamda function*
  
---
 
 Procedure for Creating **Usage Plan , API Key and Linking to API Gateway**
 
 - We need to create a Usage Plan
- Under Usage Plan we need all _API_ and _generated API keys_ 
for example let says we have customer1 
    - we create a usage plan **UsagePlanForCustomer1**
    - we generate API Key for customer1, (we can generate multiple key if the customer1 has lot user using it).
    - Last we need to add all API and Keys to the Usage Plan.
    
 Note : _After the changes we need to re-deploy the API in Gateway for any change to take place_. 
