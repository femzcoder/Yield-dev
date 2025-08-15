This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on AWS Amplify

This application is optimized for deployment on AWS Amplify with full support for internationalization and modern Next.js features.

### Quick Deployment

1. **Verify deployment readiness:**
   ```bash
   npm run deploy:check
   ```

2. **Deploy to AWS Amplify:**
   - Connect your repository to AWS Amplify Console
   - Amplify will automatically detect the `amplify.yml` configuration
   - Your app will be deployed with optimized caching and routing

### Features Included

- ✅ **Internationalization**: English, French, and German locales
- ✅ **Optimized Build**: Configured for AWS Amplify performance
- ✅ **Security Headers**: Production-ready security configuration
- ✅ **Static Asset Optimization**: Efficient caching and delivery
- ✅ **Custom Redirects**: Proper routing for SPA behavior

### Deployment Documentation

See [AMPLIFY_DEPLOYMENT.md](./AMPLIFY_DEPLOYMENT.md) for detailed deployment instructions, troubleshooting, and configuration options.

### Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Deployment verification
npm run verify-amplify  # Check Amplify deployment readiness
npm run deploy:check    # Run linting and deployment verification

# Internationalization builds
npm run build:en        # Build with English locale
npm run build:fr        # Build with French locale
```

## Alternative Deployment Options

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
