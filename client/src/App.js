import React, { useEffect, lazy, Suspense } from 'react';
import './styles/base.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp/SignInSignUp'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin'
              render={() =>
                currentUser
                  ? (<Redirect to='/' />)
                  : (<SignInSignUp />)
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);