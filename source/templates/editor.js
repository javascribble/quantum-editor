export default `
<style>
    * {
        box-sizing: border-box;
        user-select: none;
    }

    :host {
        display: grid;
        grid-template-rows: min-content auto min-content;
        grid-template-columns: 50% 50%;
        overflow: hidden;
        height: 100%;
    }

    #header {
        background: linear-gradient(var(--secondary-background-color), var(--primary-background-color));
    }

    #footer {
        background: linear-gradient(var(--primary-background-color), var(--secondary-background-color));
    }

    #engine {
        padding: 0 15px;
    }

    #viewport {
        box-shadow: 0px 0px 1px 1px var(--secondary-highlight-color);
        justify-self: center;
        align-self: center;
        resize: both;
        overflow: hidden;
        max-width: calc(100% - 30px);
    }

    #objects {
        grid-column: 1;
    }

    #properties {
        grid-column: 2;
        direction: rtl;
        justify-self: end;
    }

        #properties:after {
            direction: ltr;
        }

    .bar {
        grid-column-start: span 2;
    }

        .bar > div {
            padding: 0 15px 0 5px;
            resize: horizontal;
            overflow: auto;
            float: left;
        }

    .panel {
        background-color: var(--secondary-background-color);
        white-space: nowrap;
        resize: horizontal;
        position: relative;
        max-width: 100%;
        overflow: auto;
        grid-row: 2;
        z-index: 1;        
    }

    .view {
        grid-row: 2;
        grid-column: 1 / 3;
    }
</style>
<div id="header" class="bar">
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
</div>
<quantum-tree id="objects" class="panel"></quantum-tree>
<quantum-engine id="viewport" class="view"><slot></slot></quantum-engine>
<div id="properties" class="panel"></div>
<div id="footer" class="bar">
    <span class="icon" title="transform">&#10021;</span>
    <span class="icon" title="rotate">&#128472;</span>
    <span class="icon" title="scale">&#9878;</span>
</div>
<quantum-region id="selection"></quantum-region>
`;