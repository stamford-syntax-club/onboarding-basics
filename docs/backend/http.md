---
sidebar_position: 3
---

# HTTP

_Written By: Nay Htet Kyaw_

HTTP (Hypertext Transfer Protocol) is a fundamental protocol of the World Wide Web. It's the protocol that enables the exchange of data between your web browser and web servers. In this guide, we'll take you through the basics of HTTP in a step-by-step manner.

## What is HTTP?

HTTP is the foundation of data communication on the web. It allows your web browser to request and receive web pages, images, videos, and other resources from web servers. Here's how it works:

1. **Client and Server:** There are two main entities in an HTTP transaction: the client (your web browser) and the server (where the website's data is stored).

2. **Request-Response:** HTTP operates on a request-response model. The client sends a request to the server, and the server responds with the requested data.

## HTTP Verbs

HTTP uses various methods, often referred to as HTTP verbs, to specify the desired action to be performed on a resource. The most common HTTP verbs include:

- `GET`: Used to request data from the server. For example, when you open a webpage, your browser sends a GET request to retrieve the page.

- `POST`: Used to submit data to the server. This is often used when filling out forms on websites.

- `PUT`: Used to update a resource on the server.

- `DELETE`: Used to request the removal of a resource on the server.

## URL Structure

URLs (Uniform Resource Locators) are used to identify resources on the web. A URL typically consists of:

- **Protocol**: Specifies the protocol being used (e.g., `http://` or `https://` for secure connections).

- **Domain**: The address of the server (e.g., `www.example.com`).

- **Path**: The path to the specific resource on the server (e.g., `/page/about`).

## Status Codes

HTTP responses are accompanied by status codes that indicate the outcome of the request. Some common status codes include:

- `200 OK`: The request was successful, and the server is returning the requested data.

- `404 Not Found`: The requested resource could not be found on the server.

- `500 Internal Server Error`: An error occurred on the server while processing the request.

## Using HTTP Requests in JavaScript

Now, let's see how you can use JavaScript to make HTTP requests using the Fetch API. We'll provide examples for GET, POST, PUT, and DELETE requests along with their outputs.

### GET Request example:

```javascript
// GET Request Example
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### Output:

```javascript
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit..."
}
```

```
This code sends a GET request to https://jsonplaceholder.typicode.com/posts/1,
retrieves the data, and logs it to the console.
```

### POST REQUEST EXAMPLE:

```javascript
// POST Request Example
const postData = {
  userId: 1,
  id: 101,
  title: "Sample Post",
  body: "This is a sample post body.",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### OUTPUT:

```javascript
{
  "userId": 1,
  "id": 101,
  "title": "Sample Post",
  "body": "This is a sample post body."
}
```

```
This code sends a POST request to https://jsonplaceholder.typicode.com/posts with JSON data,
and then logs the response data to the console.
```

### PUT REQUEST EXAMPLE:

```javascript
// PUT Request Example
const updatedData = {
  id: 1,
  title: "Updated Post Title",
  body: "This is the updated post body.",
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### OUTPUT:

```javascript
{
  "userId": 1,
  "id": 1,
  "title": "Updated Post Title",
  "body": "This is the updated post body."
}
```

```
This code sends a PUT request to update an existing resource at https://jsonplaceholder.typicode.com/posts/1.
```

### DELETE REQUEST EXAMPLE

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.status === 200) {
      console.log("Post deleted successfully.");
    } else {
      console.error("Error:", response.status);
    }
  })
  .catch((error) => console.error("Error:", error));
```

#### OUTPUT:

```
Post deleted successfully.
```

```
This code sends a DELETE request to delete a resource at https://jsonplaceholder.typicode.com/posts/1.
It checks the response status to confirm the success of the operation.
```

You can use these examples as a reference for making HTTP requests in JavaScript and understanding the basics
of HTTP. Feel free to modify the URLs and data to suit your needs.

HOPE YOU FIND IT USEFUL 😊.
