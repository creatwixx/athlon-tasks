import React from 'react';
import './App.css';
import Checkbox, { CheckboxParams, CheckboxState } from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

const checkboxes: CheckboxParams[] = [
  {
    id: '1',
    label: 'Checkbox 1',
    value: CheckboxState.PARTIAL,
    disabled: false,
    partial: true,
    onChange: (value: CheckboxState) => {
      console.log(value);
    },
  },
  {
    id: '2',
    label: 'Checkbox 2',
    value: CheckboxState.CHECKED,
    disabled: false,
    partial: false,
    onChange: (value: CheckboxState) => {
      console.log(value);
    },
  },
  {
    id: '3',
    label: 'Checkbox 3',
    value: CheckboxState.UNCHECKED,
    disabled: false,
    partial: false,
    onChange: (value: CheckboxState) => {
      console.log(value);
    },
  },
  {
    id: '4',
    label: 'Checkbox 4',
    value: CheckboxState.UNCHECKED,
    disabled: true,
    partial: false,
    onChange: (value: CheckboxState) => {
      console.log(value);
    },
  },
];

function App() {
  return (
    <>
      <div className='container'>
        <div className='base-checkbox-container'>
          <label>Base Checkbox</label>
          <Checkbox
            id={'5'}
            label={'Base Checkbox'}
            value={CheckboxState.UNCHECKED}
            disabled={false}
            partial={false}
            onChange={(value: CheckboxState) => {
              console.log(value);
            }}
          />
        </div>
        <div className='stacked-checkboxes'>
          <label>Stacked Checkboxes</label>
          <CheckboxGroup checkboxes={checkboxes} inline={false} />
        </div>
        <div>
          <label>Inline Checkboxes</label>
          <CheckboxGroup checkboxes={checkboxes} inline={true} />
        </div>
      </div>
    </>
  );
}

export default App;
