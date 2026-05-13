import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

const SITE_URL = 'https://lujain.fashion'
const SITE_TITLE = 'Lujain Design | لجين ديزاين'
const SITE_DESC = 'بوتيك لجين ديزاين — تصاميم عبايات فاخرة وحصرية في عدن، اليمن. أناقة تُعبّر عنكِ.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE_TITLE },
      { name: 'description', content: SITE_DESC },
      { name: 'theme-color', content: '#0a0a0a' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESC },
      { property: 'og:image', content: `${SITE_URL}/abaya-1.jpg` },
      { property: 'og:locale', content: 'ar_YE' },
      { property: 'og:site_name', content: 'Lujain Design' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESC },
      { name: 'twitter:image', content: `${SITE_URL}/abaya-1.jpg` },
    ],
    links: [
      {
        rel: 'canonical',
        href: SITE_URL,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Tajawal:wght@200;300;400;500;700&family=Great+Vibes&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
