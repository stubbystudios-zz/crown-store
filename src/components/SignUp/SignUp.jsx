import React, { useState } from 'react';
import './SignUp.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = ({ signUpStart }) => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  }

  return (
    <section className="sign-up" >
      <h2 className='title'>I do not have an account</h2>
      <p>Sign up with your email and password</p>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <fieldset>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Emails'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign up</CustomButton>
        </fieldset>
      </form>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials =>
    dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);