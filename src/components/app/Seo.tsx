import Head from 'next/head'

interface Props {
  title: string
  description: string
  og_title: string
  og_description: string
  og_type: string
}

export default function Seo({
  title,
  description,
  og_title,
  og_description,
  og_type,
}: Props) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={og_title} />

      <meta property="og:description" content={og_description} />

      <meta property="og:type" content={og_type} />

      <meta
        property="og:image"
        content={`https://vlnck.vercel.app/api/og?title=${title}`}
      />
    </Head>
  )
}
