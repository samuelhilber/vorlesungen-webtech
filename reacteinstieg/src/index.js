import {createRoot} from 'react-dom/client';
import ChoiceBar from "./components/ChoiceBar";
import VotingComponent from "./components/VotingComponent"
import "./index.css";

document.body.innerHTML = '<div id= "app"></div>';  // erstellt ein div im Index mit der id "app"

const umfrage = {
    frage: "Programmiersprachen",
    details: "Welche Programmiersprache magst du?",
    antworten: [
        {title: "WebTech", count: 1},
        {title: "ProgAdvanced", count: 2},
        {title: "Datenbanken", count: 3},
        {title: "Unix", count: 4},
        {title: "Netzwerk", count: 5},
    ]
}

const root = createRoot ( document.getElementById("app")); 
// root.render(<h1>Hello World from React</h1>) //erstellt im Objekt Root ein HTML element

root.render( // wenn mehre HTML Objekte gezeigt werden sollen. Muss alles in ein <div></div>
        <div>
            <VotingComponent question={umfrage} />
        </div>
);