export default `
<style>
    * {
        user-select: none;
    }

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
        height: 50%;
        width: 50%;
    }
</style>
<div id="header" class="bar">
    <input id="load" type="file" />
    <button id="save">Save</button>
</div>
<quantum-layout>
    <textarea id="project"></textarea>
    <div id="viewport"><quantum-engine id="engine"><slot></slot></quantum-engine></div>
</quantum-layout>
<div id="footer" class="bar">
    <span class="icon" title="save">&#128427;</span>
    <span class="icon" title="export">&#128448;</span>
    <span class="icon" title="import">&#128449;</span>
    <span class="icon" title="play">&#9654;</span>
    <span class="icon" title="pause">&#10074;&#10074;</span>
    <span class="icon" title="stop">&#9209;</span>
    <span class="icon" title="settings">&#128736;</span>
    <span class="icon" title="add">&#43;</span>
    <span class="icon" title="delete">&#215;</span>
    <span class="icon" title="edit">&#9998;</span>
    <span class="icon" title="transform">&#10021;</span>
    <span class="icon" title="rotate">&#128472;</span>
    <span class="icon" title="scale">&#9878;</span>
</div>
<quantum-region id="selection"></quantum-region>
`;