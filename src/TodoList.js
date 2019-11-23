import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changInputValue}
          />
          <button
            onClick={this.props.addListItem}
          >
            提交
          </button>
        </div>
        <div>
          <ul>
            {
              this.props.list.map((el, index) => {
                return (
                <li 
                  key={index}
                  onClick={this.props.deleteListItem.bind(this, index)}
                >
                  {el}
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    addListItem() {
      const action = {
        type: 'add_list_item'
      }
      dispatch(action)
    },
    deleteListItem(index) {
      const action = {
        type: 'delete_list_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);