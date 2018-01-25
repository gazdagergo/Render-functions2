import React from 'react';
import { render } from 'react-dom';
import ConfirmationWrapper from './confirmationWrapper';
import articleHelper from './articleHelper';

const App = () => (
  <div>
    <ConfirmationWrapper>
      {(confirmed)=>{
        if (confirmed) {
          articleHelper.deleteArticle();
        }
      }}
    </ConfirmationWrapper>
  </div>
);

render(<App />, document.getElementById('root'));
