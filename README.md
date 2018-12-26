# PiQ Share

## Description

PiQ Share is a photo cataloging and sharing application that lets users share original photos, and highlight favorite “piq’s” from other PiQ users, and galleries on the web, within their PiQ Share Gallery.

## Brief Example

![alt text](https://github.com/wheresronald0/PiQ_Share/blob/master/index_view.png "Screenshot for Application")

## This project is / should be used for

This web application is a full-stack MEN web application created to practice Node.js, Express, EJS, Mongoose and MongoDb, and Passport user authentication

## User Stories

- User has a main gallery page that highlights thumbnails of their favorite photos
- User can select the thumbnail and expand the photo and description
- User can update the photo (name, description, or photo itself)
- User can create a new account login to view their photos, and logout
- Other users can comment on the users photos
- User can post their photos on Social media accounts

## Features - Pseudo Code (MVP/Bronze)

### Global Page Structure

- Logo (on and off navigation bar depending on page?)
- Navigation bar
- Galleries
- Login/LogOut

### Index page

- User types PiQ url and reaches the landing page
- User see daily piq
- User can click on one of the user auth links that will go to the same user auth page

### User Authorization page

- User can create account or login via form and then appropriate link
- If authorized- user is taken to new/current Main Gallery Page
- If not authorized- user stays on auth page

### Main User Gallery page

- Gallery has Photo Add button to add piq with name, url, and description
- User sees empty/populated gallery
- User can click on a photo thumbnail to expand

### Photo Expand

- User sees enlarged piq, title, full/a description
- User sees update and delete button

### Photo Add

- User sees form containing name, url, description, and create button
- User sees Description placeholder “creative description”, or “tell us the inspiration for this piq ”
- User is taken to gallery photo was submitted to

### Photo Edit

- User sees form that populates the name, url, and description
- User can select update or delete, and user is redirected back to the gallery that the photo originated

## Advanced Features (Silver)

- User create account will accept additional user information (name, welcome back message, etc.)
- User will be able to upload their own piq vs just a link to other piq’s they like on the web
- Photo expand- user can "like" a photo
- Other users comments on the photo are tagged to the user name and not entered manually
- Photo Expand- user sees “add to collection” button that takes user to Add to Collection form, allowing them to start or add to PiQ Gallery

## Advanced Features (Gold)

- Share photo with with social media accounts (FB, Twitter, InstaGram, etc.)
- API with google photos
- A short checkbox form at “create account” to capture types of photos they like (future purpose of showing user the PiQ of the day)
- User settings for updating password and “photo likes” preferences form
- Tag individual photos from any gallery and add it to a collection/gallery
- User can do a mass delete of an entire gallery and/or multiple photos within a gallery without having to click and delete individually
- Photo Expand with modal instead of an separate page

## List of Technologies Used

- JavaScript
- Node.js
- Express
- Passport
- EJS
- Mongoose
- Mongo Db
- Bootstrap
- CSS
- HTML

## Contribution Guidelines

if you'd like to contribute to this project, please checkout a branch

## Project's main repository

(https://github.com/wheresronald0/PiQ_Share)

## Project's issue tracker

(https://github.com/wheresronald0/PiQ_Share/issues)
