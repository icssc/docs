# RDS Postgres

ICSSC projects use a single [AWS RDS](https://aws.amazon.com/rds/) Postgres server that contains many of our databases. Currently, [API](/ppapi), [ZotMeet](/zotmeet), [ZotNFound](/zotnfound), [Corporate Dashboard](/special-projects/corporate-dashboard), & Fellowship Rewrite use this database server.

## Reasoning

Refer to the Postgres Glossary to learn the difference between a Postgres server and database. Using a single Postgres server allows us to reduce cost and increate performance at our scale. This allows all our projects that require a relational / SQL database to share and pool their resources, compared to having seperate instances per project.

## Databases

### Roles / Permissioning

#### `<project>_dev` Group

**This group should exist for all databases.**

This is the parent group that individual members' database users inherit their permission from.

#### `<project>_lead` Group

**This group should exist for all databases.**

This is the parent group that project leads' database users inherit their permission from.

#### `<project>_prod` User

**This group should exist for all databases.**

This is the databse user used to connect from the production deployment.
