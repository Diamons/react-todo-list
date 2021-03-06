import React from 'react';

export const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        className="TodoInput"
        type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}
      />
    </form>
  )
}

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
