import type { MetadataRoute } from 'next'

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Y!eld',
    short_name: 'Y!eld',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/Logo-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/Logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}