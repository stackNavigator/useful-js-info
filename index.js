const objectSchema = {
    field1: 'a',
    field2: 'b',
    field3: {
        myProp: {
            anotherProp: 'c'
        }
    },
    field4: 'gachi'
};

const arraySchema = [
    'a',
    'b',
    {
        myProp: {
            anotherProp: 'c'
        }
    },
    'gachi'
];

const input = {
    a: 4,
    b: 6,
    c: 11
};

const drochTask = (schema, input) => {
    for (prop in schema) {
        if (typeof schema[prop] === 'object') {
            drochTask(schema[prop], input);
        }
        else {
            schema[prop] = input[schema[prop]] ? input[schema[prop]] : schema[prop];
        }
    }
    return schema;
};
 
console.log(drochTask(arraySchema, input));
