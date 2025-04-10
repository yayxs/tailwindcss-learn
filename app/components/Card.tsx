import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="m-2 rounded-lg border border-gray-200 bg-white p-4 text-black shadow-md hover:shadow-lg">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};
