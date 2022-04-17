import { Col, Row } from 'antd';
import { FC, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import fakeData from './collections.json';
import Filter from './Filter';
import Sort from './Sort';
import './style.scss';
interface ICollection {
  _id: string;
  name: string;
  symbol: string;
  is_verified: boolean;
  collection_24h_vol: number;
  collection_24h: number;
  floor_price: number;
  owners_count: number;
  supply: number;
}

const HomePage: FC = () => {
  const [collections, setCollections] = useState<ICollection[]>(fakeData);

  return (
    <div id="home__page">
      <div className="home__page-container container">
        <PageBanner
          title="The Metaverse Shopping Cart"
          desc="Discover, buy, and sell NFTs across all marketplaces."
        />
        <div className="collection__table">
          <Filter />
          <Sort />
          <div className="collection__table-list">
            {collections.map((item: ICollection) => (
              <div className="collection__item">
                <Row>
                  <Col span={9}>
                    <Link to="">
                      <div className={'collection__item-key'}>
                        <img
                          className="collection__item-key-symbol"
                          src={item.symbol}
                          alt={item.name}
                        />
                        <span className="collection__item-key-label name">
                          {item.name}
                        </span>
                        {item.is_verified && (
                          <span className="collection__item-key-tick">
                            <AiFillCheckCircle
                              style={{ transform: 'translateY(2px)' }}
                            />
                          </span>
                        )}
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <div className="collection__item-key right">
                      <span className="collection__item-key-label">
                        {item.collection_24h_vol}
                      </span>
                      <span className="collection__item-key-currency">
                        <FaEthereum />
                      </span>
                    </div>
                  </Col>
                  <Col span={3}>
                    <div className="collection__item-key">
                      <span className="collection__item-key-label desc">
                        {item.collection_24h}%
                      </span>
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="collection__item-key end">
                      <span className="collection__item-key-label">
                        {item.floor_price}
                      </span>
                      <span className="collection__item-key-currency">
                        <FaEthereum />
                      </span>
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="collection__item-key end">
                      <span className="collection__item-key-label">
                        {item.owners_count}
                      </span>
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="collection__item-key end">
                      <span className="collection__item-key-label">
                        {item.supply}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
