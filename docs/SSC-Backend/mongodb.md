---
sidebar_position: 3
---

# MongoDB

_Written By: Chinathai Panditya_

_Last Updated: 24th Sep 2023_

MongoDB is a NoSQL database management system that stores data in flexible, semi-structured BSON (Binary JSON) format. It is designed to handle large volumes of data, provide high performance, and offer excellent scalability options.

### SQL vs NoSQL Databases

SQL databases like MySQL and PostgreSQL are considered relational databases. They store related data in separate tables. When data is needed, it is queried from multiple tables to join the data back together using SQL.

MongoDB is a NoSQL database, meaning it stores data in flexible documents. Instead of having multiple tables you can simply keep all of your related data together. This makes reading your data very fast.

![Untitled](/img/backend/mongodb/Untitled.png)

### Terminology

**_MongoDB instance_** - a server running MongoDB

**_Databases_** - a ‘container’ inside the MongoDB instance - there can be multiple databases in a single MongoDB instance

**_Collections_** - In each database, we use collections to store data(document) - there can be multiple collections in a single database. You can think of collections as “tables” in SQL databases

**_Documents_** - Actual data stored in BSON (Binary JSON) format. Each document is a set of key-value pairs. There can be multiple documents in a single collection. You can think of documents as “rows” in SQL databases.

# Getting Started

For this tutorial, you need to install:

- [VSCode](https://code.visualstudio.com)
  - [MongoDB Extension](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode) (this will help you visualize the databases, collections, and documents)
- [npm](https://nodejs.org/en/download) (we will use NPM to run our program)
- [Docker](https://www.docker.com) (details about docker will be covered later)
- [Git](https://git-scm.com/downloads) (assuming you’ve already taken the “Git” course)

Clone the following repository: [https://github.com/stamford-syntax-club/onboarding-backend.git](https://github.com/stamford-syntax-club/onboarding-backend.git)

Checkout to mongodb branch by typing in the terminal: `git checkout mongodb`

## Running a local MongoDB instance

A MongoDB instance can be hosted locally on your computer, or in the cloud via [MongoDB Atlas](https://www.mongodb.com/atlas/database)

At Stamford Syntax Club, we use MongoDB Atlas to host our MongoDB instance in the cloud, allowing everyone with credentials to access.

However, in this tutorial, we will host it locally using docker. The configurations can be seen in `docker-compose.yaml` located in the repo you just cloned.

To start MongoDB, simply type the following command in your terminal

```bash
docker compose up -d db
```

The following output should be printed:

![Untitled](/img/backend/mongodb/Untitled1.png)

Now we’re going to see if the database is working or not.

Simply follow the steps shown below. The connection string is `mongodb://localhost:27017`

![Untitled](/img/backend/mongodb/Untitled2.png)

If our local MongoDB is ready to use, you should see something like this:

![Untitled](/img/backend/mongodb/Untitled3.png)

To stop the running local MongoDB instance, simply type in the command

```bash
docker compose down
```

![Untitled](/img/backend/mongodb/Untitled4.png)

## Using MongoDB Node.JS SDK

There are many ways to manipulate the mongodb: mongodb shell(mongosh), mongodb sdk(support lots of programming languages), and etc.

In this tutorial, we will be using the MongoDB SDK for Javascript/TypeScript 😽

- Kindly follow this official tutorial from the MongoDB team:
- Changes should be made in the `src/index.ts` folder

<iframe width="560" height="315" src="https://www.youtube.com/embed/fbYExfeFsI0?si=2OX6_nB-UZSlv5I9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If you require any help, don't hesitate to reach out to me on discord or line :3

For more commands, please refer to the documentations:

- [https://mongodb.github.io/node-mongodb-native/6.0/interfaces/CreateCollectionOptions.html](https://mongodb.github.io/node-mongodb-native/6.0/interfaces/CreateCollectionOptions.html)
- [https://www.w3schools.com/nodejs/nodejs_mongodb.asp](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
- [https://mongodb.github.io/node-mongodb-native/6.0/](https://mongodb.github.io/node-mongodb-native/6.0/)
