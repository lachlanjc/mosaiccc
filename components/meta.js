import Head from 'next/head'
import theme from '../lib/theme'

export default ({
  name = '@lachlanjc',
  title = 'mosaiccc',
  description = 'A chaotic, editable layout experiment by @lachlanjc.',
  image = 'https://cloud-9lzjxg2wo-lachlan-jc.vercel.app/public-jpeg.jpeg?v=1589869186333',
  url = 'https://mosaiccc-lachlanjc.vercel.app/'
}) => (
  <Head>
    <title>
      {title} – {name}
    </title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.indigo} />
    <meta name="theme-color" content={theme.colors.indigo} />
  </Head>
)
