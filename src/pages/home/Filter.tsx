import { CSSProperties, FC, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';

interface IDateOption {
  _id: string;
  label: string;
  value: string;
}
const dateOptions: Array<IDateOption> = [
  {
    _id: '24',
    label: 'Last 24h',
    value: '24',
  },
  {
    _id: '7',
    label: 'Last 7 days',
    value: '7',
  },
  {
    _id: '30',
    label: 'Last 30 days',
    value: '30',
  },
];

const Filter: FC = () => {
  const [selected, setSelected] = useState<IDateOption>(dateOptions[0]);
  const [isOpened, setIsOpened] = useState<Boolean>(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const handleSelect = (data: IDateOption) => {
    setSelected(data);
    toggle();
  };

  const iconStyle: CSSProperties = {
    transform: `translateY(4px) ${isOpened ? 'rotate(90deg)' : ''}`,
    fontSize: 18,
    transition: 'ease-in-out .3s',
  };

  return (
    <div className="collection__table-filter__section">
      <div className="filter__section-container">
        <div className="filter__section-search">
          <MyInput placeholder="Search collections by name or address" />
        </div>
        <div className="filter__section-date">
          <MyButton
            onClick={toggle}
            style={{
              minWidth: 150,
              backgroundColor: 'white',
              justifyContent: 'flex-start',
            }}
            icon={<IoIosArrowDropdown style={iconStyle} />}
          >
            {selected.label}
          </MyButton>
          {isOpened && (
            <div className="date-options">
              <ul className="date-options-list">
                {dateOptions.map((item: IDateOption) => (
                  <li onClick={() => handleSelect(item)}>{item.label}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
