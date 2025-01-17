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
