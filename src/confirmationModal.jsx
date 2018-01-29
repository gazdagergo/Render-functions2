import React from 'react';

class ConfirmationModal extends React.Component {

  state = {
    modalVisible: false
  };

  render(){
    if (this.state.modalVisible) {
      return (
      <div>
        <div
          style={{
            background: 'gray',
            display: 'inline-block',
            position: 'absolute',
            padding: 12,
            borderRadius: 5,
            left: 54,
            top: 16
          }}
        >
          {this.props.text}<br />
          <button
            onClick={() => {
              this.props.onConfirm()
              this.setState({modalVisible: false})
            }}
          >
            Yes
          </button>
          <button
            onClick={ () => this.setState({ modalVisible: false }) }
          >
            No
          </button>
        </div>
        {this.props.children}
      </div>
      )   
    }

    return (
      <div onClick={() => this.setState({ modalVisible: true })}>
        {this.props.children}
      </div>
    )
  }
};

export default ConfirmationModal;
