import React from 'react';

class LoadContent extends React.Component {
  state = {
    loading: true,
    error: false,
    data: [],
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((err) => this.setState({ loading: false, error: true }))
  }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.props,
          ...this.state,
        })}
      </div>
    );
  }
}
export default LoadContent;
