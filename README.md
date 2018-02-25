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

-----------------------------------------------------------------------------------------------------------------------------------
[Ankur]

My approach was very simple, which is broken in three components:
1) Creation of a AWS Lamba for addition of two numbers.
2) Creation of a API Gateway to invoke AWS Lamda.
3) Allowing API Gateway to pass information to aws lamba or the two number as input.
  
1. Creation of AWS Lamba for Addition of two number:
  - *This is a node.js application so while creating AWS lambda select a simple Node.js 4.3.3*
  - *Copy the code written in **addNumber.js** (This contains a simple funtion for acception two input and adding them)*
  
2. Creation of a API Gateway to invoke AWS Lamda.
  - *While creating AWS Lambda - There is a **trigger section**  choose API Gateway*
  - *This will expose us an endpoint with as Get Request that wil invoke our AWS Lambda*
  
3.  Allowing API Gateway to pass information to aws lamba or the two number as input.
  - *Now after creating an API Gateway we need to go to **Integration Request** section , this section allow us to pass information to in the request in json format, add **input.js** in there*
  - *here i am alreday passing input as integer rather than as string.*
  
Now we have an endpoint with us to invoke our Lamba, make sure to add parameter to the endpoint
  - *for example: endpointURL?number1=10&number2=7*
  - *Now you just hit the endoint generated with input parameter added in browser to check*
