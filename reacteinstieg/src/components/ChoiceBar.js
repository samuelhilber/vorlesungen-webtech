import React from "react";
 
export default function ChoiceBar({title, percent, startwert}) {

    const [count, setCount ] = React.useState(startwert);

    function handleClick() {
        setCount(count + 1);
    }

    return <div className="ChoiceBar" onClick={ handleClick }>
        <div className="Progress" style={   {width: percent + "%" } }>
            <div className="ChoiceBarTitle">{ title }</div>
        </div>
        <div className="ChoiceBarBadge">{ count }</div>
    </div>;
}