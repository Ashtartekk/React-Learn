import React from "react";

interface listProps {
  name: string;
  age: number;
}
function CompD(props: listProps) {
  const { name, age } = props;
  return (
    <div>
      name:{props.name} age:{props.age}
    </div>
  );
}

class CompE extends React.Component {
  state = {
    name: "AsharteKk",
    age: 24,
  };
  render() {
    return <CompD name={this.state.name} age={this.state.age}></CompD>;
  }
}

export default CompE;
