import { FC, ReactNode } from 'react';
import MainFooter from './Footer';
import MainHeader from './Header';
import './style.scss';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="main__layout">
      <MainHeader />
      <div className="main__layout-content">{children}</div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
