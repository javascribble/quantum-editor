export default `
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
<div id="header">
    <input id="load" type="file" />
    <button id="save">Save</button>
</div>
<slot></slot>
<div id="footer">
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
<slot name="widget"></slot>
`;