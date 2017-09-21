# REST_PPB2017
*Authors: Aniela Skwark, Barbara Wojtczak, Dominika Bankiewicz, Klaudia Wereniewicz, Konrad Linkowski, Patryk Wylegała, Rafał Ciećwierz*

A project created for the PPB2017

## Installation
```
[Node v7.x] (https://nodejs.org/en/)
```
```
[Npm] (https://docs.npmjs.com/getting-started/installing-node)
```
```
$ git clone git@github.com:MrVaath/REST_PPB2017.git
$ cd REST_PPB2017\Server 1
$ npm install
$ cd ..\Server2
$ npm install
```

## Usage

* Start server
`$ npm start`

> SERVER: localhost:3000

## Resources

### RECORDS

* GET `/api/records` : Get all records
* GET `/api/records/users/:user_id` : Get records by user_id
* GET `/api/records/users/:user_id/products/product_id` : Get records by user_id and product_id
* GET `/api/records/users/:user_id/products/product_id/units/unit_id` : Get records by user_id, product_id and unit_id
* GET `/api/records/users/:user_id/products/product_id/units/unit_id/activities/activity_id` : Get record by user_id, product_id, unit_id and activity_id
* GET `/api/records/activities/:activity_id` : Get records by activity_id
* GET `/api/records/products/:product_id` : Get records by product_id
* GET `/api/records/units/:unit_id` : Get records by unit_id
* POST `/api/records` : Add record

### ACTIVITIES

* GET `/api/activities` : Get all activities
* GET `/api/activities/:activity_id` : Get activity by activity_id
* POST `/api/activities` : Add activity

### PRODUCTS

* GET `/api/products` : Get all products
* GET `/api/products/:product_id` : Get product by product_id
* POST `/api/products` : Add product

### UNITS

* GET `/api/units` : Get all units
* GET `/api/units/:unit_id` : Get unit by unit_id
* POST `/api/units` : Add unit

### USERS

* GET `/api/users` : Get all users
* GET `/api/users/:user_id` : Get user by user_id
* POST `/api/users` : Add user
