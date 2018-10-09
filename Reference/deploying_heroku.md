### Deploying Flak app in Heroku

# Required files

-   Procfile
-   requirements.txt

# Procfile

    web: gunicorn appfilename:appobject

> appfilename - Filename of app managing file,
> appobject - object of flask

# Deployment Steps

1. login with heroku credentials

        heroku login

2. create app

        heroku create <app-name>

3. git initialise and commit

        git init
        git add .
        git commit -m "Commit Message"

4. git add origin

        heroku git:remote --app <app-name>

5. pushing code

        git push heroku master

6. open app

        heroku open
        
 > some issue when virtualenv is active 
