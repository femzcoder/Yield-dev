# AWS Amplify Deployment Guide

This guide provides step-by-step instructions for deploying your Next.js application to AWS Amplify.

## Prerequisites

- AWS Account with Amplify access
- GitHub repository connected to AWS Amplify
- Node.js 18+ (for local development)

## Deployment Steps

### 1. Create Amplify App

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Select the branch you want to deploy (usually `main` or `master`)

### 2. Build Settings

Amplify will automatically detect the `amplify.yml` file in your repository. If not, use these settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 3. Environment Variables

Set these environment variables in the Amplify Console:

#### Required Variables:
- `NODE_VERSION`: `18` (or your preferred Node.js version)
- `NPM_CONFIG_UNSAFE_PERM`: `true`

#### Optional Variables (if needed):
- `NEXT_PUBLIC_API_URL`: Your API endpoint URL
- `NEXT_PUBLIC_LOCALE`: Default locale (already handled in build scripts)
- Any other environment-specific variables your app requires

### 4. Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Add your custom domain
3. Configure DNS settings as instructed
4. SSL certificate will be automatically provisioned

### 5. Performance Optimizations

#### Caching Strategy:
- Static assets: 1 year cache
- HTML files: No cache (for dynamic content)
- API responses: Custom cache headers

#### Build Optimizations:
- Node modules caching enabled
- Next.js build cache enabled
- Static file optimization

## Internationalization Setup

Your app supports multiple locales (en, fr, de). The deployment includes:

### Routing Configuration:
- Root `/` redirects to `/en` (default locale)
- Locale-specific routes: `/en/*`, `/fr/*`, `/de/*`
- Middleware handles locale detection and routing

### URL Structure:
- English: `https://yourapp.amplifyapp.com/en/`
- French: `https://yourapp.amplifyapp.com/fr/`
- German: `https://yourapp.amplifyapp.com/de/`

## Monitoring and Debugging

### Build Logs:
- Check Amplify Console for build logs
- Common issues: Node version, dependency conflicts

### Performance Monitoring:
- Use Amplify's built-in monitoring
- CloudWatch integration available

### Error Tracking:
- Check browser console for client-side errors
- Server-side errors appear in Amplify logs

## Troubleshooting

### Common Issues:

#### Build Failures:
1. **Node version mismatch**: Set `NODE_VERSION` environment variable
2. **Memory issues**: Increase build timeout in Amplify settings
3. **Dependency conflicts**: Clear cache and rebuild
4. **Critters module error**: If you see "Cannot find module 'critters'" during build, this is caused by the `experimental.optimizeCss: true` setting in `next.config.ts`. Remove this setting as AWS Amplify handles CSS optimization automatically.

#### Routing Issues:
1. **404 errors**: Check `_redirects` file configuration
2. **Locale not working**: Verify middleware configuration
3. **Static assets not loading**: Check public folder structure

#### Performance Issues:
1. **Slow loading**: Enable image optimization
2. **Large bundle size**: Analyze bundle and optimize imports
3. **Cache issues**: Clear Amplify cache and redeploy

### Support Commands:

```bash
# Local development
npm run dev

# Build locally to test
npm run build
npm run start

# Lint check
npm run lint
```

## Security Considerations

### Headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### Best Practices:
- Environment variables for sensitive data
- HTTPS enforced by default
- Regular dependency updates

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Internationalization works (test all locales)
- [ ] Static assets load properly
- [ ] Forms and interactive elements function
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] SEO meta tags working
- [ ] Analytics tracking (if implemented)

## Useful Links

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Next-intl Documentation](https://next-intl-docs.vercel.app/)

## Support

For deployment issues:
1. Check Amplify Console logs
2. Review this documentation
3. Consult AWS Amplify support
4. Check Next.js deployment documentation
