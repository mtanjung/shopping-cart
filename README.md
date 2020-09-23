#  Shopping cart

## Requirements

docker

## Installation / Production setup
### Stop and remove all running docker containers
```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

### Setup docker
```bash
docker-compose build
docker-compose up
```

Note: docker-compose up will also create database, tables, along with some dummy records

### Setup backend PHP
```bash
docker exec -it ArtifactUprising-php74 bash
cd /var/www/backend
composer install
```

### Confirm it is working
```bash
http://localhost
```

## Development setup

### Setup frontend React
```bash
npm install
```

### Start frontend development environment
```bash
npm start
```

go to http://localhost:3000/ to test

### Start backend development environment
```bash
php -S localhost:8000 -t public
```

goto http://localhost:8000

Note: 
* Need to update backend CORS to allow *, otherwise session will not persist since react dev is connection to backend from port 3000
* Need to update backend .env, DB_HOST=127.0.0.1

## Directory structure

```bash
├── README.md
├── apps
│   ├── backend => PHP Lumen framework
│   └── frontend => Create React App
├── bin
│   ├── mysql
│   │   └── Dockerfile
│   └── php74
│       └── Dockerfile
├── config
│   ├── php
│   │   └── php.ini
│   └── vhosts
│       └── default.conf
├── data
│   ├── mysql => Database location
│   └── mysqldump
│       └── init.sql => mysql database, tables, and dummy data
├── docker-compose.yml
├── logs
│   ├── apache2
│   └── mysql
└── todo.md
```

## Unit testing

### PHPunit
to test, log into php container
```bash
docker exec -it ArtifactUprising-php74 bash
```
and run
```bash
/var/www/backend/vendor/bin/phpunit --stderr /var/www/backend/tests/
```
