# Calendar-tasks

Calendar grid with the ability to create and organize tasks. Calendar is implemented without using calendar libraries. Fiatures:

- Month and Week pages are implemented
- Creating and editing tasks inside calendar cells (days) in an inline manner.
- Reassign tasks between days (calendar cells) using drag and drop.
- Reorder task in one cell using drag and drop.
- Filter tasks in the calendar by a searching text.
- Creating and editing labels for tasks (color, text).
- Assigning multiple labels to the task.
- Filtering tasks by labels.
- Showing worldwide holidays for each day in the calendar.

## Installation:

### Clone the repo from comand line:

```bash
$ git clone https://github.com/dmytro-chushko/calendar-tasks.git
$ cd article-manager
```

### Install packeges in `./clinet` and `./server` directory:

```bash
$ cd clinet
$ npm i
$ cd ..
$ cd server
$ npm i
$ cd ..
```

## To run the project:

### To run with Docker:

1. Make sure you have an actual version of [Docker](https://www.docker.com/) installed on your computer. Download and install if it is necessary.
2. Configure `.env` files in both `./client` and `./server` directories like described below
3. Staying in root directory build the docker images from command line:

```bash
$ docker-compose build
```

4. Run the project:

```bash
$ docker-compose up
```

5. You may change settings in `docker-compose.yml` file

### To run from your local machine:

1. Make sure you have a version of [Node.js](https://nodejs.org/en/download) not lower than 18.18.1 installed on your computer. Download and install if it is necessary.
2. Make sure you have [PostgreSQL](https://www.postgresql.org/) database. Download and install if it is necessary.
3. Configure `.env` files in both `./client` and `./server` directories like described below
4. Being in the `./server` directory run the back-end application from the command line:

```bash
$ npm run start:dev
```

5. Being in the `./client` directory run the front-end application from the command line:

```bash
$ npm run dev
```

</br>

_*Navigate to the address in your browser http://localhost:5173. This page will automatically reload after saving changes to project files.*_<br>
_*Navigate to the address in your browser http://localhost:8090/api/docs to see the Swagger API documentation.*_</br>

## Configuration of the `.env` files:

### For front-end application:

Create `.env` file in the `./client` diretory and set this variable:

- VITE_BASE_URL = backend application host name

### For back-end application:

Create `.development.env` file in the `./server` directory and set the next variables:

- PORT = application port
- DB_TYPE = `postgres`
- POSTGRES_HOST = database host
- POSTGRES_PORT= database port
- POSTGRES_USER = database user
- POSTGRES_PASSWORD= database password
- POSTGRES_DB = databasee name

Or you can use these ones if are using docker-compose running approach:

```java-script
PORT=8090
DB_TYPE =postgres
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=root
POSTGRES_DB=postgres
```

## Worldwide holidays API

> https://date.nager.at/swagger/index.html

## Technologies

### Base backend libraries

- **Framework**: NestJS
- **Validation**: Class Validator
- **ORM**: TypeORM
- **DB**: PostgreSQL
- **API Protocol**: REST(OpenAPISwagger)

### Base frontend libraries

- **Framework**: React SPA (Vite)
- **Forms | Validation**: Hook Forms, Yup
- **State | Query**: Redux RTK
- **UI**: Styled-Components, React-Select

### Environment:

- **Docker Compose**
