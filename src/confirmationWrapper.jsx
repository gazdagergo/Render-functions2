import React, {Fragment} from 'react';

class ConfirmationWrapper extends React.Component {

  state = {
    confirmed: false
  };

  render(){
      if (!this.state.confirmed) {
        console.error('ee');
        return (
          <div>
            Delete article?<br/>
            <button
              onClick={() => this.setState({confirmed: true})}
            >Yes</button>
            <button>No</button>
          </div>
        )
      }

      return (
        <div>
          {this.props.children({ ...this.state })}
        </div>
      )
  }
};

export default ConfirmationWrapper;
