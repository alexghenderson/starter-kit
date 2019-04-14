import enzyme from 'enzyme';

import Root from '~/components/root/server';
import App from '~/components/app';

jest.mock('~/components/app', () => () => null);

describe('Server Root', () => {
  it('should shallow render without error', () => {
    const wrapper = enzyme.shallow(<Root url="/" context={{}}/>);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
