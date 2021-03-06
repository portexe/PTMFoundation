import React from 'react';
import { GlobalStyles } from '../components/GlobalStyles';
import fDB from '../lib/firebase';
import { useUx } from '../hooks/ux';
import { useRouter, withRouter } from 'next/router';
import { PTMHead } from '../components/PTMHead';
import { PTMNav } from '../components/PTMNav';
import Linkify from 'react-linkify';

const App = ({ firebaseData }) => {
  useUx();
  const router = useRouter();

  return (
    <>
      <PTMHead title='PTM Foundation' body='Racism is for choads' img='https://i.imgur.com/D7TP0kA.jpg' />
      <PTMNav />
      {firebaseData.length > 0 ? (
        <>
          <div id='feed' className='feed'>
            {firebaseData.map((post, index) => (
              <div key={index} className='post'>
                <img onClick={() => router.push(`/post?postid=${post.id}`)} src={post.img} alt='post' />
                <h1 onClick={() => router.push(`/post?postid=${post.id}`)}>{post.title}</h1>
                <Linkify>
                  <p>{post.body}</p>
                </Linkify>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='not-found'>Sorry there's nothing here yet. Check back soon!</div>
      )}
      <GlobalStyles />
    </>
  );
};

App.getInitialProps = async () => {
  const snap = await fDB.collection('posts').orderBy('date', 'desc').get();
  const dataArr = [];
  snap.forEach((doc) => dataArr.push({ ...doc.data(), id: doc.id }));
  return { firebaseData: dataArr };
};

export default withRouter(App);
