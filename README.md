# REST_PPB2017
*Authors: Aniela Skwark, Barbara Wojtczak, Dominika Bankiewicz, Klaudia Wereniewicz, Konrad Linkowski, Patryk Wylegała, Rafał Ciećwierz*

A project created for the PPB2017

## Instalacja
```
[Node v7.x] (https://nodejs.org/en/)
```
```
[Npm] (https://docs.npmjs.com/getting-started/installing-node)
```
```
$ git clone git@github.com:MrVaath/REST_PPB2017.git
$ cd REST_PPB2017
$ npm install
$ cd ..
```

## Użycie

* Start server
`$ npm start`

> SERVER: localhost:3000

## Zasoby

### RECORDS

* GET `/api/records` : Get all records
* GET `/api/records/users/:id` : Get records by user_id
* GET `/api/records/activities/:id` : Get records by activity_id
* GET `/api/records/products/:id` : Get records by product_id
* GET `/api/records/units/:id` : Get records by unit_id
* POST `/api/records` : Add record

### ACTIVITIES

* GET `/api/activities` : Get all activities
* GET `/api/activities/:id` : Get activities by activity_id
* POST `/api/activities` : Add activity

### PRODUCTS

* GET `/api/products` : Get all products
* GET `/api/products/:id` : Get products by product_id
* POST `/api/products` : Add product

### UNITS

* GET `/api/units` : Get all units
* GET `/api/units/:id` : Get units by unit_id
* POST `/api/units` : Add unit

### USERS

* GET `/api/users` : Get all users
* GET `/api/users/:id` : Get users by user_id
* POST `/api/users` : Add user
