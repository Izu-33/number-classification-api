# Number Classification API

A simple Express API that classifies numbers and provides mathematical properties, along with a fun fact. The API accepts a number as a query parameter, performs number classification, and returns a structured response.

## Introduction

The Number Classification API is designed to classify numbers by their properties and provide fun mathematical facts using the Numbers API. It handles both basic properties like whether a number is prime or perfect, as well as more advanced features such as Armstrong numbers. The API is built using Express.js and can be easily extended.

### Key Features:
- Checks if a number is **prime**.
- Checks if a number is **perfect**.
- Classifies numbers as **Armstrong** and identifies whether they are **even** or **odd**.
- Fetches a **fun fact** about the number using the Numbers API.

## Installation

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

Next, install the necessary dependencies:
```bash
npm install
```

This will install:

- express for building the server.
- axios for making HTTP requests.
- cors for handling cross-origin requests.

# Usage

1. Ensure the dependencies are installed by running npm install.
2. Start the server using the following command:

```bash
npm start
```
The server will start on port 8000 (or any port specified in your environment variables).

3. The API is now ready to receive requests. You can use a tool like Postman or cURL to test it, or simply navigate to the URL in your browser.

### Example

To classify a number, send a GET request to:

```bash
http://localhost:8000/api/classify-number?number=371
```
This will return a JSON response with the classification of the number 371.

# API Endpoints

```bash
GET /api/classify-number?number=<number>
```
Request Query Parameter:
- number (required): The number you want to classify.

### Example Request:

```bash
GET http://localhost:8000/api/classify-number?number=371
```

### Example Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (Invalid Number):

If the `number` query parameter is invalid, the response will be:
```json
{
  "number": "abc",
  "error": true
}
```

# Data Validation

The API validates the number query parameter as follows:

- The number must be a valid integer.
- The number must not be negative.
- The number must not be a floating-point number.
- If the `number` query parameter does not pass these checks, the API will return a `400 Bad Request` error with an appropriate error message.

## Valid Input Examples:

- `371` - Valid integer.
- `100` - Valid integer.

### Invalid Input Examples:

- `"abc"` - Invalid, non-numeric string.
- `3.14` - Invalid, floating-point number.
- `-5` - Invalid, negative number.
- `"Infinity"` - Invalid, Infinity is not supported.

# Functions
The API includes several key helper functions:

`isPrime(num)`
Checks if the given number is a prime number.

`isPerfect(num)`
Checks if the number is a perfect number.

`classifyNumber(num)`
Classifies the number into categories like Armstrong, even, or odd based on its properties.

`digitSum(num)`
Calculates the sum of the digits of the given number.