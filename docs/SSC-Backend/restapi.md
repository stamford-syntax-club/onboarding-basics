---
title: RESTful API
sidebar_position: 3
---

# Introduction RESTful API Naming Conventions

_Written By: Nay Htet Kyaw_

In this tutorial, we will dive into the essential aspects of RESTful API naming conventions. We'll address the importance of consistent and meaningful naming and provide guidelines to help you create RESTful API endpoints that follow best practices.

## Why Naming Conventions Matter

Naming conventions are the foundation of a well-designed RESTful API. They ensure clarity, maintainability, and ease of use for both developers and consumers. Consistent naming makes your API more user-friendly and aligns it with industry standards.

## The Problem: Non-RESTful URL

Consider the following URL:

```
https://center-be.stamford.dev/api/get_files/2022_ent_bil.pdf
```

This URL represents a non-RESTful API endpoint. It violates RESTful naming conventions in several ways:

1. **Verb in the URL**: The presence of the "get" verb in the URL (`get_files`) is unnecessary. RESTful APIs should rely on HTTP verbs (GET, POST, PUT, DELETE) for actions.

2. **Non-descriptive Path**: The path segment `get_files` lacks meaningful context. It should reflect the resource being manipulated, not the action.

## The Solution: RESTful Naming

To adhere to RESTful naming conventions, we should transform the URL into something like this:

```
https://center-be.stamford.dev/api/files/2022_ent_bil.pdf
```

Here's how this URL aligns with RESTful principles:

1. **Resource-Oriented Path**: The path segment `files` clearly represents the resource (files) being accessed. It's a noun that describes what the API deals with.

2. **No Actions in the URL**: There are no action verbs like "get" in the URL. Instead, the HTTP verb (GET) should be used for retrieving resources.

3. **Resource Identifier**: The file name `2022_ent_bil.pdf` serves as a unique identifier for the specific resource being requested.

## Guidelines for RESTful Naming

To create RESTful API endpoints that adhere to conventions, consider the following guidelines:

1. **Use Nouns for Resources**: Choose descriptive nouns that represent the primary resources your API deals with (e.g., `files`, `users`, `products`).

2. **HTTP Verbs for Actions**: Use HTTP verbs (GET, POST, PUT, DELETE) to perform actions on resources. Avoid verbs in the URL path.

3. **Keep URLs Simple**: Make URLs concise and meaningful. Avoid unnecessary complexity and nesting.

4. **Use Plurals for Resource Names**: Typically, resource names are in plural form (e.g., `files` instead of `file`, `users` instead of `user`).

## Conclusion

In this guideline, we've highlighted the importance of adhering to RESTful API naming conventions. By using nouns for resources, HTTP verbs for actions, and keeping URLs simple and descriptive, you can create APIs that are intuitive, maintainable, and consistent with industry best practices.

Remember, well-named APIs lead to better developer experiences and higher adoption rates among users.

```
HOPE YOU FIND IT USEFUL 😊.
```
