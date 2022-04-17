import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FC } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
const MainHeader: FC = () => {
  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainet',
      cacheProvider: true,
    });

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);
  };
  return (
    <div className="main__header">
      <div className="main__header-container">
        <div className="main__header-logo">
          <img src="/images/header_logo.svg" alt="Header logo" />
        </div>
        <div className="main__header-search__form">
          <MyInput placeholder="Search items, collections, and profiles" />
        </div>
        <div className="main__header-right__section">
          <MyButton
            to="/help"
            icon={
              <Tooltip title="Help">
                <QuestionCircleOutlined
                  style={{
                    fontSize: 20,
                    opacity: 0.7,
                    color: 'var(--my-title-color)',
                  }}
                />
              </Tooltip>
            }
            hideBorder
          />
          <div className="right__section-vertical__divider" />
          <MyButton onClick={connectWallet}>Connect Wallet</MyButton>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
