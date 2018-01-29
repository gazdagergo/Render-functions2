import React from 'react';
import { render } from 'react-dom';

class ConfirmDeleteComponent extends React.Component {
  state = { confirm: false };

  setConfirm = () => this.setState({ confirm: true });

  handleConfirm = () => {
    this.props.onClick()
  }

  cancelAction = () => {
    this.setState({ confirm: false })
  }

  render() {
    const { children } = this.props;
    const { confirm } = this.state;

    return children({
      setConfirm: this.setConfirm,
      cancelAction: this.cancelAction,
      handleConfirm: this.handleConfirm,
      confirm
    });
  }
}


class App extends React.Component {
  render() {
    return(
      <div>
        <ConfirmDeleteComponent onClick={() => console.log("deleted")}>
          {({ confirm, setConfirm, cancelAction, handleConfirm }) => {
            
            if (confirm) {
              return (
                <div>
                  <button>Delete</button>
                  <button onClick={handleConfirm}>Yes</button>
                  <button onClick={cancelAction}>No</button>
                </div>
              )
            }

            return (
              <div>
                <button onClick={setConfirm}>
                  Delete
                </button>
              </div>
            )
          }}
        </ConfirmDeleteComponent>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
