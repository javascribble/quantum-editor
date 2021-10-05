export default `
<style>
    :host {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    quantum-layout {
        height: 100%;
    }

    quantum-tabs {
        width: 50%;
    }

    quantum-button {
        --padding: 0.5em 1em;
        --cursor: pointer;
    }

        quantum-button:hover {
            --color: blue;
            --background-color: aliceblue;
        }
 
    #container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-left: solid grey 1px;
        height: 100%;
    }

    #view {
        overflow: auto;
        resize: both;
        width: 500px;
        height: 500px;
    }
</style>
<div>
    <span id="save" title="save">&#128427;</span>
    <span id="export" title="export">&#128448;</span>
    <span id="import" title="import">&#128449;</span>
    <span id="play" title="play">&#9654;</span>
    <span id="pause" title="pause">&#10074;&#10074;</span>
    <span id="stop" title="stop">&#9209;</span>
</div>
<quantum-layout>
    <quantum-tabs dock="top">
        <quantum-button tab="panel1" slot="tabs">Markup</quantum-button>
        <quantum-button tab="panel2" slot="tabs">Code</quantum-button>
        <quantum-button tab="panel3" slot="tabs">Data</quantum-button>
        <div tab="panel1">test</div>
        <div tab="panel2">test</div>
        <div tab="panel3">
            <span title="add">&#43;</span>
            <span title="delete">&#215;</span>
            <span title="edit">&#9998;</span>
        </div>
    </quantum-tabs>
    <div id="container"><div id="view"><quantum-engine src="./source/game.json"></quantum-engine></div></div>
</quantum-layout>
<slot></slot>
`;