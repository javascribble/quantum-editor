export default `
<style>
    quantum-layout {
        height: 100%;
    }

    quantum-layout > * {
        min-width: min-content;
        min-height: min-content;
    }

    quantum-tabs {
        width: 33%;
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
        border-left: solid grey 1px;
        height: 100%;
    }

    #content {
        overflow: auto;
        resize: both;
        width: 500px;
        height: 500px;
    }
</style>
<quantum-layout>
    <quantum-tabs dock="top">
        <quantum-button tab="panel1" slot="tabs">MARKUP</quantum-button>
        <quantum-button tab="panel2" slot="tabs">CODE</quantum-button>
        <quantum-button tab="panel3" slot="tabs">DATA</quantum-button>
        <div tab="panel1">test1</div>
        <div tab="panel2">test2</div>
        <div tab="panel3">test3</div>
    </quantum-tabs>
    <div id="container">
        <div id="content"><slot></slot></div>
    </div>
</quantum-layout>
`;