This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js - https://nextjs.org/
- Hosting - https://vercel.com/
- Tailwind CSS - https://tailwindcss.com/
- FontAwesome - https://fontawesome.com/
- Google Fonts - https://fonts.google.com/
- auth0 - https://auth0.com/

  All settings found on: https://manage.auth0.com/

  - AUTH0_SECRET= //use openssl to generate this - https://slproweb.com/products/Win32OpenSSL.html

    ```
    openssl rand -hex 32
    ```

  - AUTH0_BASE_URL= https://localhost.com:3000
  - AUTH0_ISSUER_BASE_URL= ...
  - AUTH0_CLIENT_ID= ...
  - AUTH0_CLIENT_SECRET= ...
  - Register callbacks
    - http://localhost:3000/api/auth/callback
    - http://localhost:3000/

- stripe - https://stripe.com/
- mongo - https://www.mongodb.com/
- gpt3 api - https://platform.openai.com/
