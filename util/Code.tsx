import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

function Code({ content, ...props }) {
  return (
    <Highlight {...defaultProps} theme={theme} code={content} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          //   style={style}
          className={`px-4 overflow-x-auto ${props.className ? props.className : ``}`}
          style={{ backgroundColor: "rgba(28,25,23,0.9)" }}
        >
          {tokens.map((line, i) => (
            <div
              className="table-row"
              key={`${line}.${i}`}
              {...getLineProps({ line, key: i })}
            >
              <div className="line-no">{i + 1}</div>
              <div className="line">
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
