import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

interface MyButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: ReactNode;
  hideBorder?: boolean;
  to?: string;
}

const MyButton: FC<MyButtonProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = (event: any) => {
    if (props.to) return navigate(props.to);

    props.onClick && props.onClick(event);
  };

  let className: string = '';
  if (props.hideBorder) className += 'hide__border';

  let textStyle: CSSProperties = {};
  if (props.icon) textStyle.marginLeft = 8;

  return (
    <div className="my__button">
      <button className={className} onClick={handleClick} {...props}>
        {props.icon && <span className="my__button-icon">{props.icon}</span>}
        {props.children && (
          <span style={textStyle} className="my__button-text">
            {props.children}
          </span>
        )}
      </button>
    </div>
  );
};

export default MyButton;
