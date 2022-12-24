import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

function Code({ content, ...props }) {
  return (
    <Highlight {...defaultProps} code={content} language='jsx' theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`px-4 overflow-x-auto ${
            props.className ? props.className : ``
          }`}
        >
          {tokens.map((line, i) => (
            <div
              className='table-row'
              key={`${line}.${i}`}
              {...getLineProps({ line, key: i })}
            >
              <div className='line-no'>{i + 1}</div>
              <div className='line'>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
