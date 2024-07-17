'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/app/components/Button';
import Link from 'next/link';

interface ComponentNameProps {
  // Define your props here
}
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      这是一个learning下的layout.tsx 通常可以放导航nav或者header
      <div>
        <Link href="/learning/about">About</Link>
        <br />
        <Link href="/learning/setting">Settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
};

export default Layout;
