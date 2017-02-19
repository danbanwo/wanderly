[![Stories in Ready](https://badge.waffle.io/danbanwo/wanderly.png?label=ready&title=Ready)](https://waffle.io/danbanwo/wanderly)
# wanderly

## Installation

1. Fork Clone Repo
2. npm install all dependencies

PostgreSQL was used as the database, with Sequelize as the ORM.
In order to setup the database, you'll need to create a sequelize config file. To do this:
  * Create a **config** folder within the back directory of the project
  * Within the config file, create a **config.json** file and paste the following:
  ```javascript
  {
    "development": {
      "username": *your computers username*,
      "password": null,
      "database": *name of database*, (example: wanderly-test)
      "host": "127.0.0.1",
      "dialect": "postgres" 
    },
    "test": {
      "username": *your computers username*,,
      "password": null,
      "database": *name of database*, (example: wanderly-test),
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": *your computers username*,,
      "password": null,
      "database": *name of database*, (example: wanderly-test),
      "host": "127.0.0.1",
      "dialect": "postgres"
    }
  }
  ```
