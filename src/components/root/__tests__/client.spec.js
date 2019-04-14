import enzyme from 'enzyme';

import Root from '~/components/root/client';
import App from '~/components/app';

jest.mock('~/components/app', () => () => null);

describe('Client Root', () => {
  it('should shallow render without error', () => {
    const wrapper = enzyme.shallow(<Root />);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
