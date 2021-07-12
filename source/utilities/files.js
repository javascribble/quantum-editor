export const saveFile = async json => {
    const link = document.createElement('a');
    link.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json)));
    link.setAttribute('download', 'project');
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};

export const loadFile = async file => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = event => resolve(JSON.parse(event.target.result));
    fileReader.readAsText(file);
});

// import 'https://unpkg.com/@javascribble/quantum';
// import 'https://unpkg.com/@javascribble/quantum-input';
// import 'https://unpkg.com/@javascribble/quantum-engine';

// const { load } = quantum;

// export const plugin = {
//     load: async engine => {
//         const { entities, systems, video } = engine;

//         systems.add({
//             validate: entity => 'plugin' in entity,
//             construct: entity => {

//             },
//             destruct: entity => {

//             },
//             update: (entities, time) => {
//                 video.draw(drawables);
//             }
//         });

//         entities.add(await engine.loadPrototype());
//     },
//     unload: engine => {
//     }
// };

// document.body.style.visibility = 'visible';