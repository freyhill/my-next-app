// app/template.js
'use client';

import { useState } from 'react';
type TemplateProps = {
  children: React.ReactNode;
};
const Template: React.FC<TemplateProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div id="routeParam">
      这是learnning下的template.tsx
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
};

export default Template;
