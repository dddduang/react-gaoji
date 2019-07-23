// wuzhangai
import React, { Component } from 'react';

class Duang1 extends Component {
  constructor(props) {
    super(props) // 调用父类的固定写法
    this.state = {
      labelText: '无障碍 WAI-ARIA',
      inputValue: ''
    }
    this.onchangeHandler = this.onchangeHandler.bind(this)
  }

  render() { 
    return ( 
      <div>
        <input 
          type="text"
          style={{margin: '50px'}}
          value={this.state.inputValue}
          aria-label={this.state.labelText}
          aria-required="true"
          onChange={this.onchangeHandler}
          onCompositionStart={()=>{this.inputLock=true}}
          name="name"/>
      </div>
    );
  }

   onchangeHandler(event) {
    event.persist()

    this.setState({ // 改变值的方法
      inputValue: event.target.value
    })
  }
}
 
export default Duang1;