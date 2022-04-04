# Get Events

A application for users  to be able to search for events (concerts, sports,  theatre etc ) in any city in the world and  have the abilty to save them to their own profile.

The  Application  uses  a  MERN stack (MongoDB, Express, React, Node.JS) , This  is the first "Full Stack " project I have built on my own since  completing a 16 Week Bootcamp @ The School of Code.

Using the Tickmaster API  I created a search form that was able to query the TM API and return the first 20 results that matched.

I then built my own REST api using Node and Express, I decided  to use MongoDB  over a  SQL  based database as  I had studied the Back End Development and APIs module in freecodeCamp and wanted  to see if I could put into practice what I had learnt.

Once  I had  worked  out the syntax , it was straight forward to create the routes  needed  for my API.

For user Authentication I decided  to use Auth0, I had  used  this once before in my bootcamp final project and liked  how it intergrated  into my application, I used  it to protect  the "favourites" route  on my frontend so user's would have  to login to save their favourites.

I wanted  the Application to have a clean UI and UX almost minimal, I used  Chakra UI library for the Buttons  and Search Bar components, the styling could  be  improved, but I set myself  a  deadline  of 1 week to complete this  project.


## To use

You will need  your own API KEY from https://developer.ticketmaster.com/products-and-docs/apis/getting-started/

### Add the API KEY to a .env file  in the  root  of the  get-events folder "REACT_APP_APIKEY=Your API KEY"

- npm i 
- npm start 






