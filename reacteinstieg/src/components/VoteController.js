import React from "react";
import VoteList from "./VoteList";
import InactiveVoteComposer from "./InactiveVoteComposer";
import VoteComposer from "./VoteComposer";

export default function VoteController({ alleFragen }) {
  const [VoteComposerActive, setVoteComposerActive] = React.useState(false);
  const [activeQuestion, setActiveQuestion] = React.useState(alleFragen);

  const addQuestion = (newQuestion) => {
    const newActiveQuestion = [...activeQuestion, newQuestion];
    setActiveQuestion(newActiveQuestion);
    hideVoteComposer();
  };

  const showVoteComposer = () => {
    setVoteComposerActive(true);
  };

  const hideVoteComposer = () => {
    setVoteComposerActive(false);
  };

  return (
    <div>
      <VoteList alleFragen={activeQuestion} />
      {
        VoteComposerActive ? (
          <VoteComposer
            handleCancle={hideVoteComposer}
            handleSave={addQuestion}
          />
        ) : (
          <InactiveVoteComposer handleClick={showVoteComposer} />
        )
        //If VoteComposer Active (if ist das ?) VoteComposer else InactiveVoteComposer
      }
    </div>
  );
}
