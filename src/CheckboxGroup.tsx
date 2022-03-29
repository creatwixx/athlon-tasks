import React from 'react';
import './CheckboxGroup.css';
import Checkbox, { CheckboxParams } from './Checkbox';

export interface CheckboxGroupParams {
  inline: boolean;
  checkboxes: CheckboxParams[];
}

const CheckboxGroup: React.FC<CheckboxGroupParams> = ({
  checkboxes,
  inline,
}) => {
  return (
    <div className={`checkbox-group ${inline ? 'inline' : ''}`}>
      {checkboxes.map((checkbox, i) => (
        <Checkbox key={i} {...checkbox} />
      ))}
    </div>
  );
};

export default CheckboxGroup;
