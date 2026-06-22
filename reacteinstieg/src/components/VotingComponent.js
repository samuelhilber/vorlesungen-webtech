import React from "react";
import ChoiceBar from "./ChoiceBar";
 
export default function VotingComponent({question}) {

 const summe = question.antworten.reduce(
    (altesZwischenergebnis , el) =>{
        return altesZwischenergebnis + el.count;
    },0); // das ,0 gibt den Startparameter an
    
return <div className="Row VotingRow Spacer">
    <div className="Head">
        <h1 className="Title">
            { question.frage }
            <div className="Badge">{ summe }</div>
        </h1>
        <div className="Description Emphasis">{ question.details }</div>
    </div>
    {
        question.antworten.map( (el) =>{ // .map nachschauen für verstädnis! 
            return <ChoiceBar title={el.title} percent={el.count / summe * 100} startwert={el.count}/>
        })
    }
</div>;
}