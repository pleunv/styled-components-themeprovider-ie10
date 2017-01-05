/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Nav from 'components/Nav';
import { ThemeProvider } from 'styled-components';

const theme = {
  bgColor: 'orange'
};

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <ThemeProvider theme={theme}>
          <Nav>
            Orange Theme
          </Nav>
        </ThemeProvider>
        <Nav>
          Default Theme
        </Nav>
        <Nav bgColor="yellow">
          PropTyped
        </Nav>
      </h1>
    );
  }
}
