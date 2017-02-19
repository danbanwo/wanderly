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
Proceed to seed file as follows:
```
node back/seed/seeder.js
```
This should populate the database with dummy data to interact with.

Once the above step have been completed, go ahead and run the project by typing the following in the terminal:
```
npm start
```

##Introduction
Welcome to Wanderly. The social travel application where we make sharing your adventures and budget/itinerary easy.

##The journey so far
The **why** behind our app is to give wanderers a platform to share their adventures as experienced while also helping other wanderers plan for similar experiences.

###What can it do?
####Profile Creation
Start your journey around Wanderly by creating a profile that'll help you track both your expenses and experiences.

####Overview of All Destinations
All the adventures you've ever been on presented to you on a beautiful interface.
 * Browse a list of destinations you've been on.
 * Better yet, use our interactive map to navigate every adventure you've been on til date.
