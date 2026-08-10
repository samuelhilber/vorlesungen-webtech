import React from "react";

export default function VoteComposer({ handleCancle, handleSave }) {
  const [voteTitle, setVoteTitle] = React.useState("");
  const [voteDescription, setVoteDescription] = React.useState("");
  const formularVollstaendig = voteTitle && voteDescription;
  const save = () => {
    const newQuestion = {
      key: "Frage" + Math.random(),
      frage: voteTitle,
      details: voteDescription,
      antworten: [],
    };
    handleSave(newQuestion);
  };
  return (
    <div className="Row VoteComposer Spacer">
      <div className="Head">
        <h1 className="Title">
          <input
            className="Title"
            autoFocus
            Name="Title"
            type="text"
            value={voteTitle}
            onChange={(event) => {
              setVoteTitle(event.target.value);
            }}
            placeholder="Was willst du Wissen?"
          />
        </h1>
        <input
          className="Description"
          autoFocus
          Name="descirption"
          type="text"
          value={voteDescription}
          onChange={(event) => {
            setVoteDescription(event.target.value);
          }}
          placeholder="Beschreibe deine Frage in einem Satz"
        />
      </div>

      <div className="ButtonBar">
        <button
          disabled={!formularVollstaendig}
          className="Button"
          onClick={save}
        >
          Speicher
        </button>
        <button className="Button" onClick={handleCancle}>
          Abbrechen
        </button>
      </div>
    </div>
  );
}
