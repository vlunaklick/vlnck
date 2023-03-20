import Head from 'next/head'

interface Props {
  title: string
  description: string
  og_title: string
  og_description: string
  og_type: string
}

export default function Seo({ title, description, og_title, og_description, og_type }: Props) {
  return (
    <Head>
      <title>{title}</title>

      <meta content={description} name="description" />

      <meta content={og_title} property="og:title" />

      <meta content={og_description} property="og:description" />

      <meta content={og_type} property="og:type" />

      <meta content={`https://vlnck.vercel.app/api/og?title=${title}`} property="og:image" />
    </Head>
  )
}
