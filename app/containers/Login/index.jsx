import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Login extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>login</h1>
        )
    }
}

export default Login;
