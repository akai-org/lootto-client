import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import arrowBack from '../assets/arrow-back.svg';

const BackIcon = styled('a')`
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  margin: -1rem;
  width: 1.5rem;
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

export default BackButton;
