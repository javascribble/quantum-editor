const { loaders } = quantum;

loaders.bin = async url => fetch(url).then(response => response.blob());

//element.src = URL.createObjectURL(blob);