import React from 'react';

const AddToDo = ({onAddClick}) => {
    let input;
    return (
        <>
            <input type="text" ref={node => (input = node)} />
            <button
                onClick={() => {
                    if (input.value) {
                        onAddClick(input.value);
                        input.value = "";
                        input.focus();
                    }
                }}
            >
                Add ToDos
            </button>
        </>
    );
};

export default AddToDo;
