import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import syntaxTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import PropTypes from 'prop-types';

const CodeBlocks = (props: any) => {
  const { value, language } = props;

  return (
    <Prism language={language} style={syntaxTheme}>
      {value}
    </Prism>
  );
};

CodeBlocks.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlocks;
