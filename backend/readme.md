# REST API Node Server

## Description

1. install node js from [https://nodejs.org/en/download/]

## Getting Started

### Installation

Install the dependencies:

```bash

npm install
```

Set the environment variables:

```bash
# You will find a example.env file in the home directory. Paste the contents of that into a file named .env in the same directory. Fill in the variables to fit your application
# open .env and modify the environment variables (if needed)
```

### Commands

Run:
```bash
npm start
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--app.js          # Express app & App entry point
```

### Create .env File

You will find a example.env file in the home directory. Paste the contents of that into a file named .env in the same directory. Fill in the variables to fit your application


### Import db collection attached with project folder
