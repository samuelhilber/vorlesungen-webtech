import {createRoot} from 'react-dom/client';
import VoteList from "./components/VoteList"
import "./index.css";

document.body.innerHTML = '<div id= "app"></div>';  // erstellt ein div im Index mit der id "app"

const umfragen = [{
    key: "Frage1",
    frage: "Fächer",
    details: "Welche Fächer magst du?",
    antworten: [
        {title: "WebTech", count: 0, key: "Antw1"},
        {title: "ProgAdvanced", count: 0, key: "Antw2"},
        {title: "Datenbanken", count: 0, key: "Antw3"},
        {title: "Unix", count: 0, key: "Antw4"},
        {title: "Netzwerk", count: 0, key: "Antw5"},
    ]
},
{
    key: "Frage2",
    frage: "Programmiersprachen",
    details: "Welche Programmiersprache magst du?",
    antworten: [
        {title: "C#", count: 0, key: "Antw1"},
        {title: "C", count: 0, key: "Antw2"},
        {title: "C++", count: 0, key: "Antw3"},
        {title: "Python", count: 0, key: "Antw4"},
        {title: "HTML", count: 0, key: "Antw5"},
    ]
}]

const root = createRoot ( document.getElementById("app")); 
// root.render(<h1>Hello World from React</h1>) //erstellt im Objekt Root ein HTML element

root.render( // wenn mehre HTML Objekte gezeigt werden sollen. Muss alles in ein <div></div>
        <div>
            <VoteList alleFragen={umfragen} />
        </div>
);