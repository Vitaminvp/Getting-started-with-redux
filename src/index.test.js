import React from 'react';
import {todos, ACTIONS_TYPE} from './reducers';

it('toDos test', () => {
    const stateBefore = [];
    const action = {
        type: ACTIONS_TYPE.ADD_TODO,
        id: 0,
        text: "Learn Redux"
    };
    const stateAfter = [
        {
            id: 0,
            text: "Learn Redux",
            completed: false
        }
    ];
    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

});

it('toggleTodo test', () => {
    const stateBefore = [
        {
            id: 0,
            text: "Learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Learn React",
            completed: false
        }
    ];
    const action = {
        type: ACTIONS_TYPE.TOGGLE_TODO,
        id: 1,
    };

    const stateAfter = [
        {
            id: 0,
            text: "Learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Learn React",
            completed: true
        }
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

});