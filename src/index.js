import React from 'react';
import { render } from 'react-dom';
import ConfirmationModal from './confirmationWrapper';
import articleHelper from './articleHelper';

class App extends React.Component {
  render() {
    return(
      <div>
        <ConfirmationModal
          text="Delete this article?"
          onConfirm={ () => articleHelper.deleteArticle() }
        >
          <button>Delete</button>
        </ConfirmationModal>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
