import React from 'react';
import parse from 'html-react-parser';

const Html = ({helmet, children, scriptTags, scriptContent}) => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css?family=Lato|Roboto" rel="stylesheet"></link>
        {scriptContent && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{__html: scriptContent}}
          />
        )}
      </head>
      <body {...bodyAttrs}>
        <main id="app">{children}</main>
        {scripts}
      </body>
    </html>
  );
};

export default Html;
