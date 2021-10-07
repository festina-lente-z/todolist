import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
  render() {
		console.log('child render')
		const {content, test} = this.props;//解构赋值
		return (
		  <div onClick={this.handleClick}>
		    {test} - {content}
			</div>
		)
	}
	//当一个组件从父组件接受了参数，只要父组件render函数被重新执行了，子组件的这个生命周期函数就会被执行
	UNSAFE_componentWillReceiveProps(){
    console.log('child componentWillReceiveProps')
	}
	//当这个组件即将被从页面中剔除的时候，会被执行
	componentWillUnmount(){
		console.log('child componentWillUnmount')
	}
  handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
  }
}
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,//要求必须传递
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
TodoItem.defaultProps = {
	test: 'hello word'//test默认值
}
export default TodoItem