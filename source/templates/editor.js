export default `
<style>
</style>
<quantum-layout stack>
    <div id="header" class="bar">
        <input id="load" type="file" />
        <button id="save">Save</button>
    </div>
    <slot></slot>
</quantum-layout>
<quantum-region id="selection"></quantum-region>
`;