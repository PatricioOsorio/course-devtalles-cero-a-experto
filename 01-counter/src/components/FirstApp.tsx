import React from 'react';

interface IFirstAppProps {
  title: string;
  subtitle: string;
  name: string;
}

export const FirstApp: React.FC<IFirstAppProps> = ({ title, subtitle, name }) => {
  return (
    <div>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </div>
  );
};
