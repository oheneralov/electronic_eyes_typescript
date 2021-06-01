# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.
sudo docker run  --env="MYSQL_ROOT_PASSWORD=mypassword" mysql
mysql -uroot -pmypassword -h 172.17.0.2 -P 3306
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'mypassword';
flush privileges;
create database reactadoniscms;
adonis migration:run


```js
adonis migration:run
```
