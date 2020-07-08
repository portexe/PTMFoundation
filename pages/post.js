import React from 'react';
import { GlobalStyles } from '../components/GlobalStyles';
import fDB from '../lib/firebase';
import { PTMHead } from '../components/PTMHead';
import { PTMNav } from '../components/PTMNav';
import FourOhFour from './404';
import Linkify from 'react-linkify';

const Post = ({ title, body, img }) =>
  title && body && img ? (
    <>
      <PTMHead title={title} body={body} img={img} />
      <PTMNav />
      <div id='lonely-post'>
        <div className='post'>
          <h1>{title}</h1>
          <img src={img} alt='post' />
          <Linkify>
            <p>{body}</p>
          </Linkify>
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
