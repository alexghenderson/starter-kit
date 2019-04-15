import React from 'react';
import enzyme from 'enzyme';
import NotFoundPage from '../';

describe('NotFoundPage', () => {
  it('should render without error', () => {
    enzyme.shallow(<NotFoundPage />);
  });
  it('should attempt to set status to 404', () => {
    const mockedStatus = jest.fn();
    enzyme.shallow(<NotFoundPage staticContext={{status: mockedStatus}} />);
    expect(mockedStatus).toHaveBeenCalledWith(404);
  });
});
