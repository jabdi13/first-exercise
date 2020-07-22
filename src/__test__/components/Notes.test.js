import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Notes from '../../components/Notes';

describe('<Notes />', () => {
  const notes = shallow(<Notes />);
  test('Render del componente Notes', () => {
    expect(notes.length).toEqual(1);
  });

  test('Render del empty space', () => {
    expect(notes.find('div').last().hasClass('emptySpace')).toBeTruthy();
  });

});

describe('Notes Snapshot', () => {
  test('Comprobar la UI del componente Notes', () => {
    const notes = create(<Notes />);
    expect(notes.toJSON()).toMatchSnapshot();
  });
});