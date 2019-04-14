import React from 'react';
import parse from 'html-react-parser';


const HTML = ({helmet, children, scriptTags}) => {
  const isBrowser = !!(process.env.BROWSER);
  if (isBrowser) {
    throw new Error('HTML Component should not be executed on client!');
  }

  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  const scripts = parse(scriptTags);
  return (
    <html {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body {...bodyAttrs}>
        <div id="app" dangerouslySetInnerHTML={{__html: children}} />
        {scripts}
      </body>
    </html>
  );
};

export default HTML;
