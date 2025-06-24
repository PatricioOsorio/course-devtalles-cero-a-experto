import { useState } from 'react';

interface ICounterAppProps {
  initialValue: number;
}

export const CounterApp: React.FC<ICounterAppProps> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleAdd = () => setValue(value + 1);
  const handleSubstract = () => setValue(value - 1);
  const handleReset = () => setValue(initialValue);

  return (
    <article>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button aria-label='btn-add' onClick={handleAdd}>+1</button>
      <button aria-label='btn-substract' onClick={handleSubstract}>-1</button>
      <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
    </article>
  );
};
