/* eslint-disable react/jsx-props-no-spreading  */

import { shallow } from 'enzyme';
import Header from './Header';
import JobTypeFilter from './JobTypeFilter';

const getShallowHeaderComponent = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
const getShallowJobTypeFilter = (props = {}) => {
  const component = shallow(<JobTypeFilter {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = getShallowHeaderComponent();
  });
  it('should render without errors', () => {
    const wrapper = component.find('[data-test="header"]');
    expect(wrapper.length).toBe(1);
  });

  it('should return a level 1 heading as Logo', () => {
    const component = shallow(<Header />);
    const logo = component.find('h1');
    expect(logo.length).toBe(1);
  });
});

describe('JobTypeFilter Component', () => {
  describe('Have Props', () => {
    let component;
    beforeEach(() => {
      const props = {
        handleFilterChange: () => ('FullTime'),
      };

      component = getShallowJobTypeFilter(props);
    });

    it('should render without errors', () => {
      const wrapper = component.find('[data-test="jobFilter"]');
      expect(wrapper.length).toBe(1);
    });
    it('should render a select dropdown', () => {
      const select = component.find('[data-test="jobType"]');
      expect(select.length).toBe(1);
    });
  });
});
