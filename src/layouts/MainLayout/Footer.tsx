import { FC } from 'react';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ISocialNetwork } from '../../@types';

const socialNetworks: Array<ISocialNetwork> = [
  {
    _id: 'discord',
    name: 'Discord',
    icon: <FaDiscord style={{ color: '#5765F2' }} />,
    to: '/discord',
  },
  {
    _id: 'telegram',
    name: 'Telagram',
    to: 'telegram',
    icon: <FaTelegram style={{ color: '#35A9DB' }} />,
  },
];

const MainFooter: FC = () => {
  return (
    <div className="main__footer">
      <div className="main__footer-container">
        <span className="main__footer-policy">
          <Link to="/policy">Privacy Policy</Link>
        </span>
        <div className="main__footer-social__networks">
          {socialNetworks.map((item: ISocialNetwork) => (
            <Link to={item.to}>
              <span className="social__networks-icon">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
