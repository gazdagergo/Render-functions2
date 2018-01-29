import React from 'react';
import { render } from 'react-dom';

class ConfirmDeleteComponent extends React.Component {
  state = { confirm: false };

  setConfirm = () => this.setState({ confirm: true });

  click = () => {
    this.state.confirm ? this.props.onClick() : this.setConfirm();
  }

  render() {
    const { children } = this.props;
    const { confirm } = this.state;

    return children({
      onClick: this.click,
      setConfirm: this.setConfirm,
      confirm
    });
  }
}


class App extends React.Component {
  render() {
    return(
      <div>
        <ConfirmDeleteComponent onClick={() => console.log("deleted")}>
          {({confirm, onClick}) => (
            <button
              onClick={onClick}
            >
              {confirm ? 'Are you sure?' : 'Delete'}
            </button>
          )}
        </ConfirmDeleteComponent>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
