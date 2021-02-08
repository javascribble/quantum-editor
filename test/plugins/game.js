Quantum.Engine.plugins.add((api, engine) => {
    api.attachSystem({
        validate: entity => 'children' in entity,
        add: entity => {
            entity.children.forEach(api.attachEntity);
        }
    });
}); 