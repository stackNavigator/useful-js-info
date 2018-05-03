const sampleObj = {
    propA: [
        1,
        2,
        {
            propC: 10,
            propD: [
                -3,
                -2,
                -1
            ]
        }
    ],
    propB: 'foo'
};

const NestedPropertyDeleter = (obj, path) => {

    const recursiveDeletion = (obj, steps, i) => {
        const step = steps[i];
        const [name, index] = step.split(/[\[\]]/g);

        if  (i < steps.length - 1 && index) {
            recursiveDeletion(obj[name][index], steps, i + 1);
        }
        else if (i < steps.length - 1) {
            recursiveDeletion(obj[name], steps, i + 1);
        }       
        else if (index) {
            delete obj[name][index];
        }
        else {
            delete obj[name];
        }    
    };

    return {
        delete: () => {
            const propPath = path.split('.');
            recursiveDeletion(obj, propPath, 0);
        }
    }
};

const nestedPropertyDeleter = NestedPropertyDeleter(sampleObj, 'propA[2].propC');
nestedPropertyDeleter.delete();