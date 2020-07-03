import React from 'react';
import { PTMHead } from '../components/PTMHead';
import { PTMNav } from '../components/PTMNav';
import { GlobalStyles } from '../components/GlobalStyles';

const FourOhFour = () => {
  return (
    <>
      <PTMHead title='' body='' img='' />
      <PTMNav />
      <div className='not-found'>Unfortunately this page does not exist :(</div>
      <GlobalStyles />
    </>
  );
};

export default FourOhFour;
