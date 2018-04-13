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

        if  (i < steps.length - 1) {
            const [name, index] = step.split(/[\[\]]/g);

            if (index) {
                recursiveDeletion(obj[name][index], steps, i + 1);
            }
            else {
                recursiveDeletion(obj[name], steps, i + 1);
            }
        }
        else {
            console.log(obj);
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
console.log(nestedPropertyDeleter.delete());