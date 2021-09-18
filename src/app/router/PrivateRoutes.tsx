import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';

const PrivateRoutes = ({ ...rest }) => {
  return <>{!checkIsLoggedIn() ? <Redirect to='/' /> : <Route {...rest} />}</>;
};

export default PrivateRoutes;