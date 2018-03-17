import React from "react";
import FishForm from "./FishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <FishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
      </div>
    )
  }
}

export default Inventory;