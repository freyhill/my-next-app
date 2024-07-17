import React, { useState, useEffect } from 'react';
import Button from '@/app/components/Button';
interface ComponentNameProps {
  // Define your props here
}
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      这是learning/route页面的layout.tsx
      {children}
    </div>
  );
};

export default Layout;
