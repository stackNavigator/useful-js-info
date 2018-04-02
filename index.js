const schema = {
    field1: 'a',
    field2: 'b',
    field3: {
        myProp: {
            anotherProp: 'c'
        }
    },
    field4: 'gachi'
};

const input = {
    a: 4,
    b: 6,
    c: 11
};

const drochTask = (schema, input, result) => {
    for (prop in schema) {
        if (typeof schema[prop] === 'object') {
            drochTask(schema[prop], input, result);
        }
        else {
            result.push(input[schema[prop]] ? input[schema[prop]] : schema[prop]);
        }
    }
    return result;
};
 
console.log(drochTask(schema, input, []));
