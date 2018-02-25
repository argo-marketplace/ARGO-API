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
