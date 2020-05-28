import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <p>{location.state.title}</p>
          <p>{location.state.summary}</p>
          {location.state.year}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
