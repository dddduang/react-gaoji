import React, { Component } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef() // 创造一个 textInput DOM 元素的 ref
  }

  state = {  }
  render() { 
    return ( 
      <input 
        type="text"
        ref={this.textInput}
        style={{margin: '60px'}}
      />
    );
  }

  focus() {
    this.textInput.current.focus() // 使用原始的 DOM API 显式地聚焦在 text input 上  注意: 我们通过访问 “current” 来获取DOM节点
  }
}
 
export default CustomTextInput;