# Steps to develop

### Local develop

```
version: '3'
services:
  prisma:
    image: prismagraphql/prisma:1.34
    restart: always
    ports:
    - "4466:4466"
    environment:
      PRISMA_CONFIG: |
        port: 4466
        databases:
          default:
            connector: postgres
            host: host.docker.internal
            database: prisma
            user: postgres
            password: postgres
            rawAccess: true
            port: 5432
            migrations: true
```

`createdb prisma`

`docker-compose up`

```
endpoint: http://localhost:4466
datamodel: datamodel.prisma

generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

`prisma deploy`