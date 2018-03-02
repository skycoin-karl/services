import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Distribution from '../Distribution';
import AdminPanel from '../AdminPanel';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}admin`} component={AdminPanel} />
      <Route path={`${prefix}`} component={Distribution} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
