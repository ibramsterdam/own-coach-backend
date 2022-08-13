# Own Coach Backend

A NestJS backend for a react native app that enables an individual to track their nutrition, workouts and body composition. This backend has been created and developed with care by [me](https://www.linkedin.com/in/bram-janssen-aa0859210/).

# Overview of our current tech stack

The backend of the Own Coach app uses the NestJS framework in combination with typescript. Docker is used to run a psql server

## Badges

![](https://img.shields.io/badge/Prisma-4.2.1-success?style=flat&logo=prisma)
![](https://img.shields.io/badge/Typescript-4.7.4-orange?style=flat&logo=typescript)
![](https://img.shields.io/badge/React-17.0.2-success?style=flat&logo=react)

## Installation Guide

Please have
![](https://img.shields.io/badge/Node-16.15.0-success?style=plastic&logo=nodedotjs)

1. Clone Repository

```shell
$ git clone <repository>
```

2. Install Dependencies

```shell
$ yarn install
```

3. Create .env.local file and a .env.test

`DATABASE_URL`
`JWT_SECRET`

Ask a developer for these credentials

## Run development server

1. Start Docker on your machine (run docker ps in terminal to confirm)

2. Spin up Docker container

```shell
$ yarn db:dev:up
```

3. Migrate prisma schema

```shell
$ yarn prisma:dev:deploy
```

4. Run server in dev mode

```shell
$ yarn start:dev
```

## Run database

### Docker

A docker compose file is used to spin up a database container for development

A Compose file looks like this:

```yaml
version: '3.8'
services:
  dev-db:
    image: postgres:latest
    ports:
      - 5434:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: examplepassword
      POSTGRES_DB: exampledb
    networks:
      - examplenet
  test-db:
    image: postgres:latest
    ports:
      - 5435:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: examplepassword
      POSTGRES_DB: exampledb
    networks:
      - examplenet
networks:
  bramnet:
```

```shell
$ yarn db:dev:rm
$ yarn db:dev:up
$ yarn db:dev:restart
```

### Prisma

As you can see you can spin up a fresh test-db to run your e2e tests!

Make a prisma migration!

```shell
$ yarn prisma:dev:deploy
```

Make a prisma migration to the test!

```shell
$ yarn prisma:test:deploy
```

## Run tests

--not setup yet--

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## App Functionalities

### Available Functionalities

- Register & Login

### Planned For Development

- Track weight
- Track Nutrition
- Track Workouts
- Manage Profile

## License

--To be added--
