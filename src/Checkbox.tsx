import './Checkbox.css';
import React, { ChangeEvent, useState } from 'react';

export enum CheckboxState {
  CHECKED,
  PARTIAL,
  UNCHECKED,
}

export interface CheckboxParams {
  id: string;
  value: CheckboxState;
  disabled: boolean;
  partial: boolean;
  label: string;
  onChange: (value: CheckboxState) => void;
}

const Checkbox: React.FC<CheckboxParams> = ({
  id,
  value,
  label,
  onChange,
  disabled,
  partial,
}) => {
  const [checkboxState, setCheckboxState] = useState(value);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.checked;

    if (partial && newState) {
      setCheckboxState(CheckboxState.PARTIAL);
      onChange(CheckboxState.PARTIAL);
    } else if (!partial && newState) {
      setCheckboxState(CheckboxState.CHECKED);
      onChange(CheckboxState.CHECKED);
    } else {
      setCheckboxState(CheckboxState.UNCHECKED);
      onChange(CheckboxState.UNCHECKED);
    }
  };

  const getClassState = () => {
    const isChecked = checkboxState === CheckboxState.CHECKED;
    const isPartial = checkboxState === CheckboxState.PARTIAL && partial;

    return `checkbox ${isChecked ? 'checked ' : ''}${
      isPartial ? 'partial ' : ''
    }${disabled ? 'disabled ' : ''}`;
  };

  return (
    <>
      <label className={getClassState()}>
        {label}
        <input
          id={id}
          type='checkbox'
          checked={checkboxState !== CheckboxState.UNCHECKED}
          onChange={handleOnChange}
          disabled={disabled}
        />
      </label>
    </>
  );
};

export default Checkbox;
