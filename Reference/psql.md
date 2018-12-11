* list users

> SELECT * FROM pg_roles;

* list database

> \l

* connect to database

> \connect <db_name>

> Create Role

```
CREATE USER jithin WITH PASSWORD 'jithin123';
```

> Alter role for accessing database

```
ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myprojectuser SET timezone TO 'UTC';
```

> Grant privelage to user to database

```
GRANT ALL PRIVILEGES ON DATABASE <DB_NAME> TO <USER>;
```

> connect to database with db user

```
psql DB_NAME DB_USER

//https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge
```
