import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../components/GlobalStyles';
import fDB from '../lib/firebase';
import Head from 'next/head';
import { PTMHead } from '../components/PTMHead';
import { PTMNav } from '../components/PTMNav';
import FourOhFour from './404';

const Post = ({ title, body, img }) =>
  title && body && img ? (
    <>
    {console.log(title, body, img)}
      <PTMHead title={title} body={body} img={img} />
      <PTMNav />
      <div id='lonely-post'>
        <div className='post'>
          <h1>{title}</h1>
          <img src={img} alt='post' />
          <p>{body}</p>
        </div>
        <GlobalStyles />
      </div>
    </>
  ) : (
    <FourOhFour />
  );

Post.getInitialProps = async ({ query }) => {
  const { postid: id } = query;
  if (id) {
    const doc = await fDB.collection('posts').doc(id).get();
    return { ...doc.data(), id };
  } else {
    return { title: '', img: '', id: '', body: '' };
  }
};

export default Post;
