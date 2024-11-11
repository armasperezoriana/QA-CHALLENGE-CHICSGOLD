# qa-challenge

# API

## Endpoints

## Swagger

See swagger documentation for more details

#### {{API_URL}}/swagger/index.html

## Run the project

```bash
cd /qa-api

```

```bash
dotnet run --launch-profile http

```

# Web App

build the project

```bash
cd /qa-app

```

```bash
npm install
```

```bash
npm start
```

## Environment variables

create a .env file in the root of the project and add the following variables

```bash
REACT_APP_API_URL={QA_API_URL}
```

# Testing

This is the only user that can be used to login to the application

```bash
username: testuser
password: password
```

# Stateless Application

The application is stateless, meaning that the application does not store any session information on the server. The application is designed to be stateless so that it can be easily scaled horizontally. Any **order** and **product** you create will disappear after the application is restarted.

# Api

The api is documented using swagger, see the swagger documentation for more details. The web app lacks the implementation of many of the CRUD endpoints. Swaaager documentation will show you all the endpoints that are available including the CRUD ones that are not implemented in the web app.

# Requirements

> dotnet 8 https://dotnet.microsoft.com/en-us/download
