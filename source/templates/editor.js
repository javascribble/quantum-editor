export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #header {
        background: linear-gradient(var(--secondary-background-color), var(--tertiary-background-color));
    }

    #footer {
        background: linear-gradient(var(--tertiary-background-color), var(--secondary-background-color));
    }

    #project {
        background: var(--secondary-background-color);
        outline: none;
        border: none;
        width: 50%;
    }

    #viewport {
        background: var(--primary-background-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #engine {
        resize: both;
        overflow: auto;
    }
</style>
<quantum-layout stack>
    <div id="header" class="bar">
        <input id="load" type="file" />
        <button id="save">Save</button>
    </div>
    <quantum-layout>
        <textarea id="project"></textarea>
        <div id="viewport"><div id="engine"><slot></slot></div></div>
    </quantum-layout>
</quantum-layout>
<quantum-region id="selection"></quantum-region>
`;