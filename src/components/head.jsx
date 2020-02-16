import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import renderHTML from 'react-render-html';

const Head = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{renderHTML(title)}</title>
    <meta
      name="description"
      content="Hello, we are Dept - an international digital agency of over 1500 experienced thinkers & makers. One agency uniting creativity, technology and data."
    />
    <link rel="canonical" href="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../../../static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../../../static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../../static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="../../../static/favicon/site.webmanifest" />
    <link rel="mask-icon" href="../../../static/favicon/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link href="../../../static/fonts/font.css" rel="stylesheet" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
