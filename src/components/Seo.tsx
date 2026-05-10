import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path?: string
}

const siteUrl = 'https://astridbonoan.github.io/AS-Contractor.io'

export function Seo({ title, description, path = '/' }: SeoProps) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const url = normalized === '/' ? `${siteUrl}/` : `${siteUrl}${normalized}`
  const fullTitle = title.includes('AS Contractor') ? title : `${title} | AS Contractor`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
