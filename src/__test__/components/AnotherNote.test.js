import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import AnotherNote from '../../components/AnotherNote';

describe('<AnotherNote />', () => {
  const anotherNote = mount(<AnotherNote />);
  test('Render del componente AnotherNote', () => {
    expect(anotherNote.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(anotherNote.find('.anotherNote__title').text()).toEqual('Lorem ipsum dolor sit amet consectetur adipisicing elit')
  });

});

describe('AnotherNote Snapshot', () => {
  test('Comprobar la UI del componente AnotherNote', () => {
    const anotherNote = create(<AnotherNote />);
    expect(anotherNote.toJSON()).toMatchSnapshot();
  });
});