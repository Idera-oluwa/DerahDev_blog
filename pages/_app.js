import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../Components/Layout'
import NextProgress from "next-progress";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NextProgress delay={300} options={{ showSpinner: false }} />
   <Layout>
  <Component {...pageProps} />
</Layout>
</>
)
}
