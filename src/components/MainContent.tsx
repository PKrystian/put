import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-[300px] max-w-[1200px] mx-auto">
      <main className="p-8 lg:p-12 lg:pr-[10%]">
        {children}
      </main>
    </div>
  );
};

export default MainContent;

