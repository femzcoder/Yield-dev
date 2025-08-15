#!/usr/bin/env node

/**
 * Build Verification Script for AWS Amplify Deployment
 * This script helps verify that your Next.js app is ready for Amplify deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Verifying AWS Amplify deployment readiness...\n');

// Check required files
const requiredFiles = [
  'amplify.yml',
  'next.config.ts',
  'package.json',
  'public/_redirects'
];

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.log(`❌ ${file} - Missing`);
    process.exit(1);
  }
});

// Check package.json scripts
console.log('\n📦 Checking package.json scripts:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['build', 'start'];

requiredScripts.forEach(script => {
  if (packageJson.scripts && packageJson.scripts[script]) {
    console.log(`✅ ${script} script - Found`);
  } else {
    console.log(`❌ ${script} script - Missing`);
    process.exit(1);
  }
});

// Check Next.js version
console.log('\n🔧 Checking Next.js version:');
const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
if (nextVersion) {
  console.log(`✅ Next.js version: ${nextVersion}`);
} else {
  console.log('❌ Next.js not found in dependencies');
  process.exit(1);
}

// Check for internationalization setup
console.log('\n🌍 Checking internationalization setup:');
if (fs.existsSync('middleware.ts')) {
  console.log('✅ middleware.ts - Found');
} else {
  console.log('❌ middleware.ts - Missing');
}

if (fs.existsSync('i18n/routing.ts')) {
  console.log('✅ i18n/routing.ts - Found');
} else {
  console.log('❌ i18n/routing.ts - Missing');
}

// Check for locale messages
const locales = ['en', 'fr', 'de'];
console.log('\n📝 Checking locale messages:');
locales.forEach(locale => {
  const messagePath = `messages/${locale}.json`;
  if (fs.existsSync(messagePath)) {
    console.log(`✅ ${messagePath} - Found`);
  } else {
    console.log(`⚠️  ${messagePath} - Missing (optional)`);
  }
});

// Test build process
console.log('\n🏗️  Testing build process:');
try {
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'pipe' });
  console.log('✅ Dependencies installed successfully');
  
  console.log('Running build...');
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build completed successfully');
  
  // Check if .next directory was created
  if (fs.existsSync('.next')) {
    console.log('✅ .next directory created');
    
    // Check for key build artifacts
    const buildArtifacts = [
      '.next/static',
      '.next/server',
      '.next/BUILD_ID'
    ];
    
    buildArtifacts.forEach(artifact => {
      if (fs.existsSync(artifact)) {
        console.log(`✅ ${artifact} - Found`);
      } else {
        console.log(`⚠️  ${artifact} - Missing`);
      }
    });
  } else {
    console.log('❌ .next directory not created');
    process.exit(1);
  }
  
} catch (error) {
  console.log('❌ Build failed:');
  console.log(error.message);
  process.exit(1);
}

// Final recommendations
console.log('\n🎉 Verification completed successfully!');
console.log('\n📋 Pre-deployment checklist:');
console.log('□ Commit all changes to your repository');
console.log('□ Push changes to the branch you want to deploy');
console.log('□ Set up AWS Amplify app in the console');
console.log('□ Configure environment variables if needed');
console.log('□ Test the deployment URL after deployment');

console.log('\n🚀 Your app is ready for AWS Amplify deployment!');
console.log('📖 See AMPLIFY_DEPLOYMENT.md for detailed deployment instructions.');
