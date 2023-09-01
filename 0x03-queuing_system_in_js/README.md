# 0x03-queuing_system_in_js

This repository contains a set of tasks that involve setting up and using a queuing system based on Redis and Kue. The tasks are designed to help you understand and implement various aspects of queuing systems, job processing, and Redis interactions using JavaScript. 

## Task 0: Install a Redis Instance

I followed the provided instructions to download, extract, compile, and start a Redis instance. Make sure the Redis server is running correctly.

## Task 1: Node Redis Client

1. Install the `node_redis` package using npm.
2. Write a script named `0-redis_client.js` to connect to the Redis server.
3. The script should log appropriate messages for successful and unsuccessful connections.


## Task 2: Node Redis Client and Basic Operations

1. Copy the code from `0-redis_client.js` to `1-redis_op.js`.
2. Implement two functions: `setNewSchool` and `displaySchoolValue`.
3. Use the Redis client to perform the specified operations.


## Task 3: Node Redis Client and Async Operations

1. Copy the code from `1-redis_op.js` to `2-redis_op_async.js`.
2. Use `promisify` to modify the `displaySchoolValue` function to use async/await.




## Task 4: Node Redis Client and Advanced Operations

1. Create a script named `4-redis_advanced_op.js`.
2. Use Redis client commands to store and display hash values.


## Task 5: Node Redis Client Publisher and Subscriber

1. Create two scripts: `5-subscriber.js` and `5-publisher.js`.
2. Implement a Redis client for subscribing and publishing messages.
3. Run the scripts in separate terminal windows to observe the interaction.

## Task 6: Create the Job Creator

1. Create a script named `6-job_creator.js`.
2. Use Kue to create jobs for a queuing system.
3. Log appropriate messages for job creation.



## Task 7: Create the Job Processor

1. Create a script named `6-job_processor.js`.
2. Use Kue to process jobs created by the job creator.
3. Log messages for job progress and completion.



## Task 8: Writing the Job Creation Function

1. Implement a function `createPushNotificationsJobs` to create jobs.
2. Write tests using `queue.testMode` to validate job creation.


## Task 9: Stock Management System

1. Implement a stock management system using Express and Redis.
2. Create routes to list products, view product details, and reserve products.


## Task 13: Seat Reservation System

1. Implement a seat reservation system using Express, Redis, and Kue.
2. Create routes to view available seats, reserve seats, and process reservations.

