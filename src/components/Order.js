import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
 
class Order extends React.Component {
  staticProptypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeOrder: PropTypes.func
  }
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if (!fish) return null;
    const isAvailable = fish.status === "available";

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>Sorry {fish ? fish.name : "fish" } is no longer available</li>
        </CSSTransition>
      )
    }
    return (
      <CSSTransition {...transitionOptions}>
      <li key={key}><span>
        <TransitionGroup component="span" className="count">
          <CSSTransition classNames="count" key={count}timeout={{ enter: 5000, exit: 5000}}>
        <span>{count}</span>
          </CSSTransition>
        </TransitionGroup>
        lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.deleteOrder(key)}>&times;</button>
        </span>
      </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.orders);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}</TransitionGroup>

        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
