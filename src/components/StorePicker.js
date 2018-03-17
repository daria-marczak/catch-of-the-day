import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Fishy</h1>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            required
            ref={this.myInput}
            placeholder="Store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit store</button>
        </form>
      </React.Fragment>
    )
  }
};

export default StorePicker;