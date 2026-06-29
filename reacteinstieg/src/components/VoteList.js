import React from "react";
import VotingComponent from "./VotingComponent";

export default function VoteList({ alleFragen }) {

    return <div> 
        {
            alleFragen.map( (frage)=>{
                return <VotingComponent
                initialQuestion = { frage}
                key = { frage.key}/>
            }
            )
        }
    
    </div>
}

