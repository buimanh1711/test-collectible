import { FC } from 'react';
import './style.scss';

interface PageBannerProps {
  title: string;
  desc: string;
}
const PageBanner: FC<PageBannerProps> = ({ title, desc }) => {
  return (
    <div className="page__banner">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default PageBanner;
