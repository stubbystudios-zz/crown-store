import React from 'react';
import './SignInSignUp.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInSignUp = () => {
  return (
    <section className='sign-in-sign-up container'>
      <SignIn />
      <SignUp />
    </section>
  )
};

export default SignInSignUp;