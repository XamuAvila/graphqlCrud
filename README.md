# USER CRUD GraphQL

- First of all, in the root folder run *npm install*
- Create .ENV and knexfile.js from the template file inside templates folder
- Create the schema on your database and fill correctly the fields in .env file

# POSSIBLE ERRORS

## MYSQL Auth error
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH       mysql_native_password BY 'password';

```


# COMMANDS

```
npm run create-migration *migration name* - Create a migration
npm run migrate - Migrate files to your database
npm run rollback - Rollback the migrations
npm run create-seed *seed name* - Create a seeder
npm run seed-run - run seeders
```

