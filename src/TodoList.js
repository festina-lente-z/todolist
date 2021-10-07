import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './style.css';

class TodoList extends Component{

  constructor(props) {
    super(props);//调用父类函数
    //当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }//把数据定义在状态里
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  //在组件即将被挂载到页面的时刻自动执行    
  UNSAFE_componentWillMount(){
    console.log('componentWillMount')
  }
  render(){
    console.log('parent render')           
    return(
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id = "insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}  
        </ul>
      </Fragment>
    )
  }
  //组件被挂载到页面之后自动执行
  componentDidMount() {
    console.log('componentDidMount')
  }
  //组件被更新之前，他会自动被执行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  //组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行
  //如果shouldComponentUpdate返回true它才执行
  //如果返回false，这个函数不会被执行
  UNSAFE_componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  //组件更新完成之后会被执行
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  
  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item} 
          index={index} 
          deleteItem={this.handleItemDelete}
        />
      )    
    })
  }
  handleInputChange(){
    const value = this.input.value;
    this.setState(()=>({
      inputValue: value
    }))
  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    
  }
  handleItemDelete(index){
    //immutable
    //state不允许做任何改变
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}//es6语法，如果是{list:list},可以写为{list}
    })
  }
}

export default TodoList;