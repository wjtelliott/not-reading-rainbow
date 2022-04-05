import React, { useState } from "react";
function ColorForm(props) {
    const [input, setInput] = useState('');


    const checkIsValidColor = colorString => {

        // Make sure we can't set a color to a non-color valid string
        const notValidString = ['unset', 'inherit', 'initial', 'transparent', 'currentColor', 'revert'];
        if (notValidString.indexOf(colorString) !== -1) return false;

        const styleString = new Option().style;
        styleString.color = colorString;
        return styleString.color === colorString;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (input === '') return;
        if (checkIsValidColor(input)) props.addColor(input);

        Array.from(document.querySelectorAll('input')).forEach(
            el => (el.value = '')
        );
        setInput('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
        </div>
    );
}
export default ColorForm;