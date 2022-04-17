import { Input, InputProps, InputRef } from 'antd';
import { FC, RefAttributes } from 'react';
import './style.scss';

const MyInput: FC<InputProps & RefAttributes<InputRef>> = (props) => {
  return (
    <div className="my__input">
      <Input {...props} />
    </div>
  );
};

export default MyInput;
