import React from 'react';
import { render } from 'react-dom';
import ConfirmationWrapper from './confirmationWrapper';
import articleHelper from './articleHelper';

class App extends React.Component {
  render() {
    return(
      <div>
        <ConfirmationWrapper>
          {
            ({modalVisible}) => {
              if (modalVisible) {
                return (
                  <div>
                    Delete article?<br />
                    <button
                      onClick={() => articleHelper.deleteArticle()}>
                      Yes
                    </button>
                    <button>
                      No
                    </button>
                  </div>
                )
              }
              return <button>Delete</button>;
            }
          }
        </ConfirmationWrapper>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
