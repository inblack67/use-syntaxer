import * as React from 'react';
import CodeBlocks from './components/CodeBlocks';
import GrayMatter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

export const RenderMarkdown = (props: any) => {
  const { code } = props;
  const [mdContent, setMdContent] = React.useState('');

  React.useEffect(() => {
    const mdData = GrayMatter(code);
    setMdContent(mdData.content);
  }, [code]);

  return (
    <React.Fragment>
      {mdContent.split('').length > 0 ? (
        <ReactMarkdown source={mdContent} renderers={{ code: CodeBlocks }} />
      ) : (
        null
      )}
    </React.Fragment>
  );
};

RenderMarkdown.propTypes = {
  code: PropTypes.string.isRequired,
};
