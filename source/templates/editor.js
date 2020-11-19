export default `
<style>
    .window {
        border: solid black 1px;
    }
</style>
<quantum-layout>
    <div id="window1" class="window">
        <div draggable="true">header</div>
        <input id="load" type="file" />
        <button id="save">Save</button>
    </div>
    <div id="window2" class="window">
        <div draggable="true">header</div>
        content
    </div>
</quantum-layout>
<quantum-region id="selection"></quantum-region>
`;