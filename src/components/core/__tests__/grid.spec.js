import React from 'react';
import enzyme from 'enzyme';
import Grid from '../grid';

describe('Grid core component', () => {
  it('should render with default props', () => {
    const wrapper = enzyme.mount(
      <Grid>
        <Grid.Row>
          <Grid.Col>test-content</Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass gutter changes up the tree', () => {
    const wrapper = enzyme.mount(
      <Grid gutter={4}>
        <Grid.Row>
          <Grid.Col>test-content</Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass render responsive sizes', () => {
    const wrapper = enzyme.mount(
      <Grid gutter={4}>
        <Grid.Row>
          <Grid.Col xs={12} sm={6} md={4} lg={3}>
            test-content
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not display size 0 cols', () => {
    const wrapper = enzyme.mount(
      <Grid gutter={4}>
        <Grid.Row>
          <Grid.Col xs={0} sm={0} md={0} lg={0}>
            test-content
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
