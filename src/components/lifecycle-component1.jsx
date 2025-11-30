import React from "react";
import { TodoAPI } from "./todo-api";

export class LifecycleComponent1 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  getAllTasks = async () => {
    try {
      const { token } = await TodoAPI.getToken();
      const userTasks = await TodoAPI.getTasks(token);
      console.log("Class component", userTasks);
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.getAllTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count: ${this.state.count}`);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  componentWillUnmount() {
    console.log("Compoment will unmount");
  }

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>Click</button>
        <p>Count: {this.state.count}</p>
      </>
    );
  }
}