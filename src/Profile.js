import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super(
      (this.state = {
        timer: 0,
        intervall: null,
      })
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1>name:hamdi </h1>
          <h2>full Name: ayadi</h2>
          <img src="" alt="just a tof" />
          <h2>bio:nothing to say</h2>
          <h2>profession:vendeur electro</h2>
        </div>
        {this.state.timer}
      </div>
    );
  }
}
