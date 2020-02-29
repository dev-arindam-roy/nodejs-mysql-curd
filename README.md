# nodejs-mysql-curd
Node js with Mysql CURD application with Bootstrap 4 

## Create below table
```
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `age` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## How to run ?
```
1. Download project
2. npm install
3. create mysql database and run above sql to create table
4. set mysql database to dbconfig.js file
5. run project at http://localhost:5000
```
