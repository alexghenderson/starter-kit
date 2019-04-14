/**
 * @jest-environment node
 */

import enzyme from 'enzyme';
import Helmet from 'react-helmet';
import HTML from '../';

describe('HTML Component', () => {
  it('should render html document', () => {
    const scriptTag = '<script src="test"></script>';
    const helmet = Helmet.renderStatic();
    const wrapper = enzyme.shallow(
      <HTML helmet={helmet} scriptTags={scriptTag}>
        test-content
      </HTML>
    );
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
        <HTML helmet={helmet} scriptTags={scriptTag}>
          test-content
        </HTML>
      );
    }).toThrow();
  });
});
