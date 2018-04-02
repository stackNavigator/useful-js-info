const objectSchema = {
    field1: 'a',
    field2: 'b',
    field3: {
        myProp: {
            anotherProp: 'c'
        }
    },
    field4: 'foo'
};

const arraySchema = [
    'a',
    'b',
    {
        myProp: {
            anotherProp: 'c'
        }
    },
    'foo'
];

const input = {
    a: 4,
    b: 6,
    c: 11
};

const nestedReplacer = (schema, input) => {
    for (prop in schema) {
        if (typeof schema[prop] === 'object') {
            nestedReplacer(schema[prop], input);
        }
        else {
            schema[prop] = input[schema[prop]] ? input[schema[prop]] : schema[prop];
        }
    }
    return schema;
};
 
console.log(nestedReplacer(objectSchema, input));
