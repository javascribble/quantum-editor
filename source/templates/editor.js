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
<quantum-layout>
    <quantum-tabs dock="top">
        <quantum-button tab="panel1" slot="tabs">Markup</quantum-button>
        <quantum-button tab="panel2" slot="tabs">Code</quantum-button>
        <quantum-button tab="panel3" slot="tabs">Data</quantum-button>
        <div tab="panel1">test1</div>
        <div tab="panel2">test2</div>
        <div tab="panel3">test3</div>
    </quantum-tabs>
    <div id="container">
        <div id="controls">
            <quantum-button>Save</quantum-button>
            <quantum-button>Download</quantum-button>
        </div>
        <div id="view"><slot></slot></div>
    </div>
</quantum-layout>
`;