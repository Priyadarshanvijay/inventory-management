# inventory-management
Backend app demonstrating CRUD operations in an inventory management system

## Some Database rules:
1. There are multiple items.
2. Each item can have multiple stocks procured on different dates.
3. Each stock will have a current and procured quantity.
4. Each stock is manufactured by one company and supplied by one company.
5. Each company has a name and city and can produce / supply many stocks.
6. Each item belongs to a category.

## Steps to run:
Stack Used: Node.js with Javascript

```
Backend:      Node.js
Node version: 15.14.0 
NPM version:  7.7.6 
NPX version:  7.7.6 
```

Steps:

1. Install NPM and Node in accordance with the versions given above.
2. Install `PostgreSQL` and `Insomnia REST client`.
3. Create a user of your name in it (eg. `xyz`).
4. Open PostgreSQl in terminal using following command:
```
psql postgres
```
4. Copy contents of `/init-db/seed-sql.sql` file and paste them into terminal with Postgres open.
5. Set up the `.env` files in `/server` using `sample.env` as a reference.
6. cd into the `/server` directory
7. Install dependencies:
```
    npm ci
```
8. Run it using the following command:
```
    npm run start
```
10. In Insomnia REST Client, Click on Create button and choose the `Import from file` option.
11. Select the `insomnia-api-defination/inventoryManagement.json` file.
12. You can test out the API's.
