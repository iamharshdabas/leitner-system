import { FC, ReactNode } from "react";

import { Navbar } from "./navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl p-6 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
