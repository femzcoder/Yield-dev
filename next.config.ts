// ============================================================================
// Next.js Configuration for AWS Amplify Deployment
// ============================================================================
//
// Purpose: Configures Next.js build settings, internationalization, security,
//          and optimization for deployment on AWS Amplify hosting platform
//
// Last Modified: 2025-07-17
// Modified By: Development Team
//
// Documentation: 
// - Next.js Config: https://nextjs.org/docs/api-reference/next.config.js
// - Next-intl: https://next-intl-docs.vercel.app/
// - AWS Amplify: https://docs.amplify.aws/
//
// IMPORTANT: Changes to this file affect build process and application behavior.
//            Test thoroughly in development before deploying to production.
// ============================================================================

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// ============================================================================
// INTERNATIONALIZATION SETUP
// ============================================================================
// Initialize the next-intl plugin for internationalization support
// This plugin handles locale routing, message loading, and SSR/SSG integration
const withNextIntl = createNextIntlPlugin();

// ============================================================================
// NEXT.JS CONFIGURATION
// ============================================================================
const nextConfig: NextConfig = {
  
  // ==========================================================================
  // ROUTING CONFIGURATION
  // ==========================================================================
  
  // Disable trailing slashes in URLs for consistency
  // AWS Amplify works better with clean URLs without trailing slashes
  // This prevents duplicate content issues and improves SEO
  trailingSlash: false,
  
  // ==========================================================================
  // IMAGE OPTIMIZATION
  // ==========================================================================
  // Configure Next.js Image component for optimal performance on AWS Amplify
  
  images: {
    // Enable Next.js image optimization
    // AWS Amplify supports Next.js image optimization out of the box
    unoptimized: false,
    
    // External domains allowed for image optimization
    // Add domains here if you're loading images from external sources
    // Example: ['example.com', 'cdn.example.com']
    domains: [],
    
    // Device breakpoints for responsive images
    // These sizes are optimized for common device widths
    // Covers mobile phones, tablets, laptops, and desktop displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for different use cases
    // Used for images that aren't full-width (icons, thumbnails, etc.)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ==========================================================================
  // BUILD CONFIGURATION
  // ==========================================================================
  
  // Disable ESLint during production builds
  // This speeds up the build process on AWS Amplify
  // ESLint should be run separately in CI/CD pipeline or pre-commit hooks
  // WARNING: Only disable if you have ESLint checks elsewhere in your workflow
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ==========================================================================
  // INTERNATIONALIZATION REDIRECTS
  // ==========================================================================
  // Handle automatic redirects for internationalization
  // This function runs at build time to generate redirect rules
  
  async redirects() {
    return [
      {
        // Redirect root path to default locale (English)
        // This ensures users always land on a localized version of the site
        // Temporary redirect (302) allows for future changes to default locale
        source: '/',
        destination: '/en',
        permanent: false, // Use 302 redirect instead of 301
      },
      // Add additional redirects here as needed
      // Example: Legacy URL redirects, domain redirects, etc.
    ];
  },
  
  // ==========================================================================
  // SECURITY HEADERS
  // ==========================================================================
  // Configure HTTP security headers for enhanced protection
  // These headers are applied to all pages and API routes
  
  async headers() {
    return [
      {
        // Apply security headers to all routes
        // The regex pattern '(.*)' matches all paths
        source: '/(.*)',
        headers: [
          {
            // Prevent clickjacking attacks
            // DENY: Page cannot be embedded in frames/iframes at all
            // Alternative values: SAMEORIGIN (same domain only), ALLOW-FROM (specific domains)
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // Prevent MIME type sniffing
            // Forces browsers to respect the declared Content-Type
            // Prevents XSS attacks via MIME type confusion
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Control referrer information in cross-origin requests
            // 'origin-when-cross-origin': Send full URL for same-origin, origin only for cross-origin
            // Balances privacy with functionality (analytics, etc.)
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Additional security headers can be added here:
          // - Content-Security-Policy (CSP)
          // - Strict-Transport-Security (HSTS)
          // - X-XSS-Protection
          // - Permissions-Policy
        ],
      },
    ];
  },
  
  // ==========================================================================
  // EXPERIMENTAL FEATURES
  // ==========================================================================
  // Note: Experimental features are commented out to ensure stability
  // Uncomment and test thoroughly before enabling in production
  
  // experimental: {
  //   // Enable CSS optimization (requires 'critters' package)
  //   // WARNING: This caused build issues previously - see AMPLIFY_DEPLOYMENT.md
  //   // optimizeCss: true,
  //   
  //   // Enable React Server Components (if needed)
  //   // serverComponents: true,
  // },
  
  // ==========================================================================
  // WEBPACK CONFIGURATION
  // ==========================================================================
  // Custom webpack configuration can be added here if needed
  // Example: Custom loaders, plugins, or module resolution
  
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom webpack configuration
  //   return config;
  // },
  
  // ==========================================================================
  // ENVIRONMENT VARIABLES
  // ==========================================================================
  // Public environment variables (accessible in browser)
  // These are embedded in the client-side bundle at build time
  
  // env: {
  //   // Add public environment variables here
  //   // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
  
  // ==========================================================================
  // OUTPUT CONFIGURATION
  // ==========================================================================
  // Note: 'standalone' output was removed as it caused issues with AWS Amplify
  // AWS Amplify handles the deployment packaging automatically
  
  // output: 'standalone', // REMOVED: Caused deployment issues
  
};

// ============================================================================
// EXPORT CONFIGURATION
// ============================================================================
// Apply the next-intl plugin wrapper and export the final configuration
// The withNextIntl wrapper adds internationalization capabilities to Next.js
export default withNextIntl(nextConfig);

// ============================================================================
// MAINTENANCE NOTES
// ============================================================================
//
// When modifying this file:
// 1. Test changes locally with `npm run build` and `npm run start`
// 2. Verify internationalization still works for all locales (en, fr, de)
// 3. Check that security headers are properly applied
// 4. Test image optimization if image configuration is changed
// 5. Update the "Last Modified" date and "Modified By" fields above
// 6. Document significant changes in the project's CHANGELOG.md
//
// Common modifications:
// - Adding new redirect rules for URL changes
// - Updating image domains for external image sources
// - Adjusting security headers based on security requirements
// - Adding experimental features (test thoroughly first)
// - Configuring webpack for custom build requirements
//
// Troubleshooting:
// - Build failures: Check AMPLIFY_DEPLOYMENT.md for common issues
// - Image optimization issues: Verify domains and size configurations
// - Internationalization problems: Check i18n/routing.ts and middleware.ts
// - Security header issues: Test with browser developer tools
//
// Related files:
// - middleware.ts: Handles internationalization routing
// - i18n/routing.ts: Defines locale configuration
// - amplify.yml: AWS Amplify build configuration
// - AMPLIFY_DEPLOYMENT.md: Deployment documentation
// ============================================================================
