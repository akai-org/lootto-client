import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import arrowBack from '../assets/back.svg';

const BackIcon = styled('a')`
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  margin: -1rem;
  width: 1.5rem;

  img {
    margin-bottom: 2rem;
  }
`;

const BackButton = ({ history }) => (
  <BackIcon onClick={() => history.goBack()}>
    <img src={arrowBack} alt="Go back" />
  </BackIcon>
);

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(BackButton);
