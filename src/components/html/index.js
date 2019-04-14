import React from 'react';
import parse from 'html-react-parser';

const Html = ({helmet, children, scriptTags}) => {
  const isBrowser = !!process.env.BROWSER;
  if (isBrowser) {
    throw new Error('HTML Component should not be executed on client!');
  }

  const htmlAttrs = helmet ? helmet.htmlAttributes.toComponent() : {};
  const bodyAttrs = helmet ? helmet.bodyAttributes.toComponent() : {};
  const scripts = scriptTags ? parse(scriptTags) : null;
  return (
    <html {...htmlAttrs}>
      <head>
        {helmet && helmet.title.toComponent()}
        {helmet && helmet.meta.toComponent()}
        {helmet && helmet.link.toComponent()}
      </head>
      <body {...bodyAttrs}>
        <div id="app" dangerouslySetInnerHTML={{__html: children}} />
        {scripts}
      </body>
    </html>
  );
};

export default Html;
