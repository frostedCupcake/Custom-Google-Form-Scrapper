# RR_Milan_Hackathon

Presenting AIMS feedback in a user friendly way, and extracting sentiment towards a professor using semantic analysis on the remarks provided in the form.

This project takes input from the AIMS feedback page using a browser extension, and sends the data to a custom backend. However, since the AIMS portal is currently unavailable (no feedback to provide), we built a simple sample feedback form (available in `./sample-form`) for a proof of concept. We built an extension that parses the data from this form, and when submitting, sends it to the backend, which runs the sentiment analysis on it.

Finally, the frontend shows the average sentiment towards the professor for the course, and also the responses to the multiple choice questions.

### Configuration 

#### Backend

First time:

```
cd backend
virtualenv env
. env/bin/activate
pip install -r requirements.txt
```

And to start the backend server

```
flask run -p 5001
```

The backend will start on http://localhost:5001

#### Frontend

```
cd frontend
npm i
PORT=3000 npm start
```

The main frontend will start on http://localhost:3000

#### Form

```
cd sample-form
npm i
PORT=3001 npm start
```

The form site will start on http://localhost:3001

#### Extension

Follow the steps [here](https://superuser.com/a/247654), and choose the `./extension` folder in the repository root as the extension to load.
