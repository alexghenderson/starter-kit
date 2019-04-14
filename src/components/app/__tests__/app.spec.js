import enzyme from 'enzyme';

import App from '../';

describe('App Component', () => {
  it('should shallow render without error', () => {
    enzyme.shallow(<App />);
    // No expect required
    // Test will fail if <App/> ƒails to render
  });
});
