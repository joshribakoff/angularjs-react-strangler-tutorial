import React, { Component } from 'react';
import propTypes from 'prop-types'

const Todo = ({todo}) => <div>
    {todo}
</div>

Todo.propTypes = {
    todo: propTypes.object
}

export default Todo