import React, { Component } from "react";
import API from "../utils/API";

const styles = {
  img: {
    width: "18rem",
  },
};

export default class Discover extends Component {
  state = {
    puppyImge: "",
  };

  componentDidMount() {
    this.getPuppy();
  }

  getPuppy = () => {
    API.get()
      .then((puppy) => this.setState({ puppyImg: puppy.data.message }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="card" style={styles.img}>
          <img src={this.state.puppy} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
