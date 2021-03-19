export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
        background: lightgrey;
        height: 100%;
    }

    ::slotted(*) {
        flex-grow: 1;
    }

    quantum-menu, quantum-menu > div {
        cursor: pointer;
        white-space: nowrap;
        background-color: lightgrey;
    }

    quantum-menu:hover, quantum-menu > div:hover {
        background-color: darkgrey;
    }
</style>
<div id="header">
    <quantum-menu name="File">
        <div invoke="testMethod"><span class="icon" title="save">&#128427;</span> Save</div>
        <div invoke="testMethod"><span class="icon" title="export">&#128448;</span> Save As</div>
        <div invoke="testMethod"><span class="icon" title="import">&#128449;</span> Open</div>
    </quantum-menu>
    <quantum-menu name="Plugins"></quantum-menu>
</div>
<slot></slot>
<div id="footer">
    <span class="icon" title="settings">&#128736;</span>

    <span class="icon" title="play">&#9654;</span>
    <span class="icon" title="pause">&#10074;&#10074;</span>
    <span class="icon" title="stop">&#9209;</span>

    <span class="icon" title="add">&#43;</span>
    <span class="icon" title="delete">&#215;</span>
    <span class="icon" title="edit">&#9998;</span>
    
    <span class="icon" title="transform">&#10021;</span>
    <span class="icon" title="rotate">&#128472;</span>
    <span class="icon" title="scale">&#9878;</span>
</div>

<dialog>
    <input id="load" type="file" />
    <button id="save">Save</button>
</dialog>
`;