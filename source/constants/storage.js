export const databaseOptions = {
    version: 1,
    name: 'quantum_editor_db',
    stores: [
        {
            name: 'quantum_editor_os',
            options: {
                keyPath: 'id',
                autoIncrement: true
            },
            indices: [
                {
                    name: 'title',
                    path: 'title',
                    options: {
                        unique: false
                    }
                }
            ]
        }
    ]
};

export const transactionOptions = {
    durability: 'strict'
};