# SDC WebDev JS/TS Vue Crash

## Backend

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

## Frontend

### Docs

- Vue main website https://vuejs.org/

### Installation

- Fork repo https://github.com/School-of-Digital-Competencies/js-ts-webdev-vue-crash into your account
- Clone forked repo into your working machine
- Work on `main` branch

## Tasks

Create a web page to add, edit, delete and display (with sorting, pagination and filtering) Quotes of some popular people

Implement quote card in one of the designs from Figma https://www.figma.com/design/v9amjyHrrUVyT17LJZipQl/Quote-Cards-(Community)?node-id=0-1&node-type=canvas&t=lEz3pAjxbXMw70Wc-0

## Add, support and work with Types

### Quote Model

```ts
export type TQuote = {
  // two fields created manually in Strapi
  quote: string;
  author: string;
  // other system fields added by Strapi by default
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TQuoteEdit = Pick<TQuote, 'quote' | 'author'>;
```

### Strapi common Models

```ts
export type TPagination = {
  page: number;
  pageSize: number;
  withCount: boolean;
};

export type TSort = string | string[];

export type TMeta = Omit<TPagination, 'withCount'> & {
  pageCount: number;
  total: number;
};
```

### CRUD Models

```ts
// Get Quotes (a list of Quotes)
export type TGetQuotesRequest = {
  sort?: TSort;
  pagination?: TPagination;
};

export type TGetQuotesResponse = {
  data: TQuote[];
  meta: TMeta;
};

// Get a Quote
export type TGetQuoteRequest = {
  documentId: string;
};

export type TGetQuoteResponse = {
  data: TQuote;
  meta: Partial<TMeta>;
};

// Post a Quote
export type TPostQuoteRequest = {
  data: TQuoteEdit;
};

export type TPostQuoteResponse = {
  data: TQuote;
  meta: Partial<TMeta>;
};

// Put a Quote
export type TPutQuoteRequest = {
  data: TQuoteEdit;
  documentId: string;
};

export type TPutQuoteResponse = {
  data: TQuote;
  meta: Partial<TMeta>;
};

// Delete a Quote
export type TDeleteQuoteRequest = {
  documentId: string;
};

export type TDeleteQuoteResponse = object;
```
