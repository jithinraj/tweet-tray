import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import * as constants from '../constants';

const HeaderStyle = Styled.header`
  user-select: none;
  position: absolute;
  z-index: 99;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 34px;
  padding-top: 8px;
  padding-bottom: 7px;
  background-color: ${(props) => {
    return props.theme === 'day' ? constants.WHITE : constants.DARK_MODE_FOREGROUND;
  }};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;

const LeftViewStyle = Styled.div`
  width: auto;
  height: 100%;
  float: left;
  padding-left: ${constants.SPACING}px;
  & > * {
    float: left;
  }
`;

const TitleStyle = Styled.div`
  user-select: none !important;
  font-size:  ${constants.LARGE_FONT_SIZE}px;
  font-weight: bold;
  color: ${(props) => {
    return props.theme === 'day' ? constants.BLACK : constants.WHITE;
  }};
  line-height: 33px;
  float: left;
  padding-left: ${constants.SPACING}px;
  width: auto;
  height: 100%;
`;

const RightViewStyle = Styled.div`
  width: auto;
  height: 100%;
  float: right;
  padding-right: ${constants.SPACING}px;

  & > * {
    float: right;
  }
`;

const Header = (props) => {
  const {
    leftView,
    title,
    rightView,
    theme,
  } = props;

  return (
    <HeaderStyle
      theme={theme}
    >
      {leftView !== null && (
        <LeftViewStyle>
          {leftView}
        </LeftViewStyle>
      )}
      <TitleStyle
        theme={theme}
      >
        {title}
      </TitleStyle>
      {rightView !== null && (
        <RightViewStyle>
          {rightView}
        </RightViewStyle>
      )}
    </HeaderStyle>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  leftView: PropTypes.object,
  title: PropTypes.string.isRequired,
  rightView: PropTypes.object,
};

Header.defaultProps = {
  theme: 'day',
  leftView: null,
  rightView: null,
};

export default Header;
