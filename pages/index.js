import React from 'react';
import { GlobalStyles } from '../components/GlobalStyles';
import fDB from '../lib/firebase';
import { useUx } from '../hooks/ux';
import { useRouter, withRouter } from 'next/router';
import { PTMHead } from '../components/PTMHead';
import { PTMNav } from '../components/PTMNav';

const App = ({ firebaseData }) => {
  useUx();
  const router = useRouter();

  return (
    <>
      <PTMHead title='PTM Foundation' body='Racism is for choads' img='https://i.imgur.com/D7TP0kA.jpg' />
      <PTMNav />
      <div id='feed' className='feed'>
        {firebaseData.map((post, index) => (
          <div onClick={() => router.push(`/post?postid=${post.id}`)} key={index} className='post'>
            <img src={post.img} alt='post' />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
        <GlobalStyles />
      </div>
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
