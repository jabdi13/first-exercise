import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import MainNote from '../../components/MainNote';

describe('<MainNote />', () => {
  const mainNote = shallow(<MainNote />);
  test('Render del componente MainNote', () => {
    expect(mainNote.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(mainNote.find('h3').first().text()).toEqual('Rammury and Obama Bristle From Start')
  });

});

describe('MainNote Snapshot', () => {
  test('Comprobar la UI del componente MainNote', () => {
    const mainNote = create(<MainNote />);
    expect(mainNote.toJSON()).toMatchSnapshot();
  });
});