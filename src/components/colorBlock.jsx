import React from "react";
function ColorBlock(props) {

    const deleteBlock = block => {
        block.target.remove();
    }

    return (
        <div className="colorBlock" style={{'backgroundColor': props.color}} onClick={deleteBlock}>
            <p>{props.color}</p>
        </div>
    );
}
export default ColorBlock;