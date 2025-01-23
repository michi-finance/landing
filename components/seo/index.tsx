import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  logo: string;
  seo: string;
  keywords?: string[];
  author?: string;
  twitterUsername?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  logo,
  seo,
  keywords = [],
  author,
  twitterUsername
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://landing-rosy-three.vercel.app';
  const absoluteSeoUrl = `${siteUrl}${seo}`;

  return (
    <Head>
      <title>{title} | {description}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {author && <meta name="author" content={author} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | ${description}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteSeoUrl} />
      <meta property="og:site_name" content={title} />
        <meta property="og:image:width" content="1280"/>
        <meta property="og:image:height" content="720"/>
        <meta name="debank-cloud-site-verification" content="18059d7618de1005636b7d73bdcb76f2"/>
        <meta name="twitter:site" content={siteUrl}/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={`${title} | ${description}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seo} />
      {twitterUsername && <meta name="twitter:creator" content={`@${twitterUsername}`} />}

      <link rel="icon" href={logo} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#4511B4" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#4511B4" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </Head>
  );
};

export default SEO;