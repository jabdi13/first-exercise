import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Aside from '../../components/Aside';

describe('<Aside />', () => {
  const aside = shallow(<Aside />);
  test('Render del componente Aside', () => {
    expect(aside.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(aside.find('h1').text()).toEqual('Lorem ipsum dolor sit amet')
  });

});

describe('Aside Snapshot', () => {
  test('Comprobar la UI del componente Aside', () => {
    const aside = create(<Aside />);
    expect(aside.toJSON()).toMatchSnapshot();
  });
});