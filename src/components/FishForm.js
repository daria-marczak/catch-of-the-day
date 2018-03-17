import React from "react";

class FishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    this.props.addFish(fish);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Fish name" />
        <input type="number" ref={this.priceRef} name="price" placeholder="Fish price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>       
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Fish desc"></textarea>
        <input type="text" ref={this.imageRef} name="img" placeholder="Fish image" />
        <button type="submit">Add item</button>
      </form>
    )
  }
}

export default FishForm;