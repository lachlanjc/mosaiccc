import Head from 'next/head'
import theme from '../lib/theme'

export default ({
  name = '@lachlanjc',
  title = 'mosaiccc',
  description = 'A chaotic, editable layout experiment by @lachlanjc.',
  image = 'https://cdn.glitch.com/2d084c8d-c390-4414-a1fd-15fc40d2120a%2Fpublic-jpeg.jpeg?v=1589869186333',
  url = 'https://mosaiccc.glitch.me/'
}) => (
  <Head>
    <title>{title} – {name}</title>
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
