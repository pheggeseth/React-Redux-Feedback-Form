import React, { Component } from 'react';
import FormTemplate from '../../../FormTemplate/FormTemplate.js';

class UnderstandingView extends Component {
  render() {
    return(
      <div>
        <FormTemplate 
          category="understanding" 
          prompt="How well did you understand today's content?" 
          history={this.props.history}
          prevPage="/form/feeling"
          nextPage="/form/support" />
      </div>
    );
  }
}

export default UnderstandingView;