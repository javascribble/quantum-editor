export const saveFile = async text => {
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
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