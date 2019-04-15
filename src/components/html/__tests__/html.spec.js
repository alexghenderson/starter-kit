/**
 * @jest-environment node
 */

import enzyme from 'enzyme';
import Helmet from 'react-helmet';
import Html from '../';

describe('HTML Component', () => {
  it('should render html document', () => {
    const scriptTag = '<script src="test"></script>';
    const helmet = Helmet.renderStatic();
    const wrapper = enzyme.shallow(
      <Html helmet={helmet} scriptTags={scriptTag}>
        test-content
      </Html>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render even without scripts or helmet', () => {
    const wrapper = enzyme.shallow(<Html>test-content</Html>);
    expect(wrapper.html()).toMatchSnapshot();
  });

  /**
   * @jest-environment jsdom
   */
  it('should throw if executed in browser', () => {
    process.env.BROWSER = true;
    const scriptTag = '<script src="test"></script>';
    const helmet = Helmet.renderStatic();
    expect(() => {
      enzyme.shallow(
        <Html helmet={helmet} scriptTags={scriptTag}>
          test-content
        </Html>
      );
    }).toThrow();
  });
});
