/* istanbul ignore file */
// TODO: Set up tests for the client
import '@babel/polyfill';
import ReactDOM from 'react-dom';

import Root from '~/components/root/client';

ReactDOM.hydrate(<Root />, document.getElementById('app'));
