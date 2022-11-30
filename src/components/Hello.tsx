import React, { PureComponent } from "react";

interface IProps {
  name: string;
}

const App:React.FC<IProps> = (props: IProps) => {
  const { name } = props;

  return (
    <div className="App">
      <div>{name}</div>
    </div>
  );
};

export default App;