import React, {Fragment} from 'react';

class ConfirmationWrapper extends React.Component {

  state = {
    modalVisible: false
  };

  render(){
    return (
      <div>
        {this.props.children({
          ...this.state,
          ...this.props
        })}
      </div>
    )
  }
};

export default ConfirmationWrapper;
