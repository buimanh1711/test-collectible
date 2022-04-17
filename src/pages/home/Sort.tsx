import { Col, Row } from 'antd';
import { FC } from 'react';
import { BiSort } from 'react-icons/bi';

const Sort: FC = () => {
  return (
    <div className="collection__table-sort__section">
      <div className="sort__section-container">
        <Row>
          <Col span={9}>
            <span className="sort__section-label">Collection</span>
          </Col>
          <Col span={6}>
            <span className="sort__section-label">
              24h Volumn
              <span className="sort__icon">
                <BiSort />
              </span>
            </span>
          </Col>
          <Col span={3}>
            <span className="sort__section-label">
              24h
              <span className="sort__icon">
                <BiSort />
              </span>
            </span>
          </Col>
          <Col span={2}>
            <span className="sort__section-label end">
              Floor price
              <span className="sort__icon">
                <BiSort />
              </span>
            </span>
          </Col>
          <Col span={2}>
            <span className="sort__section-label end">
              Owners
              <span className="sort__icon">
                <BiSort />
              </span>
            </span>
          </Col>
          <Col span={2}>
            <span className="sort__section-label end">
              Supply
              <span className="sort__icon">
                <BiSort />
              </span>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sort;
