# Boilerplate FastAPI - Vuetify - FastAPI Users 

Setup a simple web app with:
- Vuetify for frontend
- FastAPI for backend
- FastAPI-Users for validation 
  - users+passwords are stored in a sqlite database
- Pinia store to keep track of bearer token in Vue that we get back from FastAPI 

## frontend

Run frontend:
```
cd vuetify-project
npm run dev
```

## backend

Run frontend:
```
cd backend
python main.py
```

## Play with it

Steps:
- Register a new user: http://localhost:3000/register
- Login with the newly created user: http://localhost:3000/login
- check the footer contains the access token
- Check the protected page - you should see a message if you are logged in: http://localhost:3000/protected-page
- Check the protected page with redirect - if you aren't logged in you get redirected to the login page http://localhost:3000/protected-redirect
  - Ideally after login you would get redirected to your orignal page, but I haven't figured this out

## OAuth2

I need to setup an OAuth2 demo, with the FastAPI-users pacakge it should be a simple addition.