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