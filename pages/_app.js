import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../Components/Layout'
import NextProgress from "next-progress";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NextSeo
            title='Derah Blog'
            description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
            canonical="www.example.com/next-seo-blog"
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2022-06-21T23:04:13Z',
                    modifiedTime: '2022-01-21T18:04:43Z',
                    authors: [
                        'https://www.example.com/authors/@firstnameA-lastnameA',
                        'https://www.example.com/authors/@firstnameB-lastnameB',
                    ],
                    tags: ['Tag A', 'Tag B', 'Tag C'],
                },
                url: 'www.example.com/next-seo-blog',
                images: {
                    url: 'Images/dev.jpg' ,
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                },
                site_name: 'Next Blog'
            }}
        />
    <NextProgress delay={300} options={{ showSpinner: false }} />
   <Layout>
  <Component {...pageProps} />
</Layout>
</>
)
}
