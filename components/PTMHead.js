import React from 'react';
import Head from 'next/head';

export const PTMHead = ({ img, title, body }) => {
  return (
    <Head>
      <title>PTM Foundation</title>
      <meta name='description' content={body} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={img} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://ptm.foundation/' />
      <meta property='og:description' content={body} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='1200' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:site' content='@PTMFoundation' />
      <meta property='twitter:creator' content='@PortEXE' />
      <meta property='twitter:image' content={img} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={body} />
    </Head>
  );
};
