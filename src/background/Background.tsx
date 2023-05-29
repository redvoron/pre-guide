import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  style?: any;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color} style={props.style}>
    {props.children}
  </div>
);

export { Background };
