import React from "react";
import ChoiceBar from "./ChoiceBar";
 
export default function VotingComponent({initialQuestion}) {
 const [question, setQuestion]=React.useState(initialQuestion);

 const handleClick=(key) =>{
    const newQuestion = { ...question, antworten:[] } 

    question.antworten.forEach((element) => {
        if (element.key == key){newQuestion.antworten.push(
                { ...element, count:element.count + 1}); //...element übernimmt alle Werte des Parameter element
        }
        else { newQuestion.antworten.push(
                {...element}); //...element übernimmt alle Werte des Parameter element
        
        };
    });

    setQuestion(newQuestion);
 }


 const summe = question.antworten.reduce(
    (altesZwischenergebnis , el) =>{
        return altesZwischenergebnis + el.count;
    },0); // das ,0 gibt den Startparameter an
    

return <div className="Row VotingRow Spacer">
    <div className="Head">
        <h1 className="Title">
            { question.frage }
            <div className="Badge">{ summe } Votes </div>
        </h1>
        <div className="Description Emphasis">{ question.details }</div>
    </div>
    {
        question.antworten.map( (el) =>{ // .map nachschauen für verstädnis! 
            return <ChoiceBar title={el.title} 
                    percent={el.count / summe * 100} 
                    count={el.count}
                    key={el.key}
                    handleClick={ () => {handleClick(el.key)} }
                    />
        })
    }
</div>;
}