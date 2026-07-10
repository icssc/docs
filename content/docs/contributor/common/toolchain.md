---
title: Toolchain
---

Our projects have slight differences in their tech stacks, but in general we use some common tools to ensure consistent and high-quality code throughout our projects.

## Language

We use [TypeScript](https://www.typescriptlang.org/) in all our projects as it is an industry standard and keeps our stack consistent.

We prefer [Oxc](https://oxc.rs/) for formatting and linting, though this varies by project.

## Frontend

Our projects with frontends use React and [Next.js](https://nextjs.org/). The expectation is that APIs also live inside the Next app, though this varies by project.

[Material UI](https://mui.com/material-ui/) is our default component library. UI/UX members design using these components, and developers prefer using Material UI components over separate libraries or custom solutions when possible.

## Database

We use [PostgreSQL](https://www.postgresql.org/) for our databases. To manage schemas, migrations, and types, we use [Drizzle ORM](https://orm.drizzle.team/).

## Deployment

We use [SST](https://sst.dev/) to standardize our deployments. This is connected with GitHub actions to automatically deploy staging instances and update production.

## Development environment

Teams use GitHub to organize issues, create pull requests, and manage the codebase. Team members require a GitHub account.

However, the local development environment is flexible. Our projects contain setup instructions for any modern operating system and contributors may use any text editor or IDE for their work.
