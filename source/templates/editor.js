export default `
<style>
    * {
        box-sizing: border-box;
        user-select: none;
    }

    #engine {
        padding: 0 15px;
    }

    #viewport {
        justify-self: center;
        align-self: center;
        resize: both;
        overflow: hidden;
        max-width: calc(100% - 30px);
    }

    #selection {
        position: absolute;
        z-index: 2;
    }

    .bar>div {
        padding: 0 15px 0 5px;
        resize: horizontal;
        overflow: auto;
        float: left;
    }

    #header {
        background: linear-gradient(var(--secondary-background-color), var(--primary-background-color));
    }

    #footer {
        background: linear-gradient(var(--primary-background-color), var(--secondary-background-color));
    }

    #viewport {
        box-shadow: 0px 0px 1px 1px var(--primary-highlight-color);
    }

    #selection {
        border: 1px dashed var(--primary-highlight-color);
    }

    .panel {
        background-color: var(--secondary-background-color);
    }
</style>
<quantum-layout>
    <div id="header" slot="top" class="icons bar">
        <span class="icon" title="save in memory">&#128427;</span>
        <span class="icon" title="export file">&#128448;</span>
        <span class="icon" title="import file">&#128449;</span>
        <span class="icon" title="play">&#9654;</span>
        <span class="icon" title="pause">&#10074;&#10074;</span>
        <span class="icon" title="stop">&#9209;</span>
        <span class="icon" title="settings">&#128736;</span>
        <span class="icon" title="add">&#43;</span>
        <span class="icon" title="edit">&#9998;</span>
        <span class="icon" title="delete">&#215;</span>
        <span class="icon" title="confirm">&#9998;</span>
        <span class="icon" title="cancel">&#9733;</span>
        <span class="icon" title="rate">&#9733;</span>
        <span class="icon" title="rate">&#9734;</span>
    </div>
    <div id="objects" slot="left" class="panel"></div>
    <slot id="engine" slot="center" class="view"></slot>
    <div id="viewport" slot="center" class="view"></div>
    <div id="properties" slot="right" class="panel"></div>
    <div id="footer" slot="bottom" class="icons bar">
        <span class="icon" title="transform">&#10021;</span>
        <span class="icon" title="rotate">&#128472;</span>
        <span class="icon" title="scale">&#9878;</span>
    </div>
    <div id="selection" slot="widgets"></div>
</quantum-layout>
`;