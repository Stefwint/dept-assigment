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
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
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
