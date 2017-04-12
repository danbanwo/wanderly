[![Stories in Ready](https://badge.waffle.io/danbanwo/wanderly.png?label=ready&title=Ready)](https://waffle.io/danbanwo/wanderly)
# Wanderly

## Introduction
Welcome to Wanderly. The social travel application where we make sharing your adventures and budget/itinerary easy.
![picture](projectpics/landingpage.png)
##### fig 1. The Landing Page.

## Installation

1. Fork Clone Repo
2. npm install all dependencies

PostgreSQL was used as the database, with Sequelize as the ORM.
In order to setup the database, you'll need to create a sequelize config file. To do this:
  * Create a **config** folder within the back directory of the project
  * Within the config file, create a **config.json** file and paste the following:

  ```
  {  
    "development": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test)  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    },  
    "test": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test),  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    },  
    "production": {  
      "username": *your computers username*,  
      "password": null,  
      "database": *name of database*, (example: wanderly-test),  
      "host": "127.0.0.1",  
      "dialect": "postgres"  
    }  
  }  
  ```

Proceed to seed file as follows:
```
$ node back/seed/seeder.js
```
This should populate the database with dummy data to interact with.

Once the above step have been completed, go ahead and run the project by typing the following in the terminal:
```
$ npm start
```

## The journey so far
The **why** behind our app is to give wanderers a platform to share their adventures as experienced, while also helping other wanderers plan for similar experiences, making them more financially responsible.

### What can it do?
***



#### Profile Creation
Start your journey around Wanderly by creating a profile. Tell us your name, some of your interests, a quick bio about you, and say hello by uploading a cool picture of yourself!
After signing up, your profile will assist you in keeping track of both your expenses and experiences.
![picture](projectpics/createprofile-uploadpic.png)
##### fig 2. Create Profile - Upload Picture Step.
***


![picture](projectpics/createprofile-interests.png)
##### fig 3. Create Profile - Interests and Short Bio Step.
***




#### Overview of All Destinations
All the adventures you've ever been on presented to you on a beautiful interface.
 * Browse a list of destinations you've been to.
 * Better yet, use our interactive map to navigate every adventure you've been on til date.
 ![picture](projectpics/profile-destinations_page.png)
##### fig 4. Destination Page.

***


#### New Destination
Currently on another one of your adventures? No worries! With Wanderly, you can add destinations on the fly, and begin to collect memories as you go.
![picture](projectpics/profile-add_destination_modal.png)
##### fig 5. Destination Page - Add Destination Modal.
***




#### Overview of All Wanderspots
In Wanderly, a Wanderspot is a term given to an establishment, point of interest (POI), or anything in between a user visits while on an adventure. All Wanderspots are contained within an itinerary, and are represented as Markers on the map.
Clicking on a destination will instantly populate a list of Wanderspots visited during the clicked adventure.

![picture](projectpics/profile-wanderspots_page.png)
##### fig 6. Wanderspots Page.
***




#### New Wanderspot
Similar to the ease of creating a new destination, creating a new Wanderspot is a breeze! Just click on the add button while on a trip, and your new Wanderspot pops up on your list of Wanderspots instantly. You can add the name of the spot visited, amount spent, a brief description of what you did, and even upload a memorable photo.
![picture](projectpics/profile-wanderspots_modal.png)
##### fig 7. Wanderspots Page - Add Wanderspot Modal.
***





### The Future of Wanderly
We absolutely believe this is a cool way to share experiences while helping others plan budget-conscious trips of their own. To further flesh out the vision we have for Wanderly, we'll be looking to build the following features:
* Budget
* Album for each destination
* Search functionality filterable by destinations(country, city, states)/POI etc
* Community of friends
* Itinerary ranking system
