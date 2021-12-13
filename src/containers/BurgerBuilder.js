import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../components/Burger/Burger";
class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      cheese: 2,
      bacon: 1,
       meat: 1,
      salad: 1,
     
    },
  };

  render() {
    return (
      <div>
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <div>Build Controls</div>
        </Aux>
      </div>
    );
  }
}
export default BurgerBuilder;
