### Deploying Angular App in Heroku

* Install Express
```
npm install express
```

* create server.js in root folder
    > server.js

    ```
    const express = require('express');
    const path = require('path');

    const app = express();

    // Serve only the static files form the dist directory
    // Replace the '/dist/<to_your_project_name>'
    app.use(express.static(__dirname + '/dist/herokuangularapp'));

    app.get('*', function(req,res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/herokuangularapp/index.html'));
    });
    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);
    ```

* change package.json

    > package.json

    ```
    ...

    "scripts": {
        "ng": "ng",
        "start": "node server.js",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e",
        "postinstall": "ng build --aot --prod"
    }

    ...

    },
    "engines": {
        "node": "~11.0.0",
        "npm": "~6.4.1"
    }

    ```

* Login to Heroku Using CLI

    ```
     heroku login
    ```

* Create App
    ```
    heroku create <app-name>
    ```

* set remote repository

    ```
    heroku git:remote --app <app-name>
    ```
* add files to git and commit

* Push to Heroku

    ```
    git push heroku master
    ```
