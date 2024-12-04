# SDC WebDev JS/TS Vue Crash

## Backend

There are several options what you could use as a Backend for our application

- Strapi https://strapi.io/
- DummyJSON https://dummyjson.com/
- Any other Backend you're familiar with

### Strapi

- Make sure you've got
  - Node.js v.20 or v.18 installed
  - npm is installed
  - Python (is using a SQLite database)
- In console run `npx create-strapi@latest my-strapi-project` where `my-strapi-project` is the folder for your backend project
- No need to create a Cloud account, Skip this step
- Then it's recommened to answer the questions like these
  - use the default database (sqlite)? yes
  - Start with example structure & data? no
  - Start with TypeScript? yes
  - Install dependencies with npm? yes
  - Initialize git repostory? yes
- Once installation is completed, in console type `cd my-strapi-project && npm run develop` to run Backend
- Open `http://localhost:1337` in your browser (if it is not opened automatically)
- First time super admin registration - fill the regustration form

Full instuctions on the Quick start guide page https://docs.strapi.io/dev-docs/quick-start

### DummyJSON

No need to configure it, just use

https://dummyjson.com/docs

## Frontend

### Docs

- Vue main website https://vuejs.org/

### Installation

- Fork repo https://github.com/School-of-Digital-Competencies/js-ts-webdev-vue-crash into your account
- Clone forked repo into your working machine
- Work on `main` branch
