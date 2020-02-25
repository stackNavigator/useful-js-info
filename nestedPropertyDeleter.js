const sampleObj = {
  propA: [1, 2, {
    propC: 10, propD: [-3, -2, -1]
  }],
  propB: 'foo'
};

const NestedPropertyDeleter = (obj, path) => {

  const recursiveDeletion = (obj, steps, i) => {
    const step = steps[i];
    const [name, index] = step.split(/[\[\]]/g);
    if (i < steps.length - 1 && index)
      return recursiveDeletion(obj[name][index], steps, i + 1)
    if (i < steps.length - 1)
      return recursiveDeletion(obj[name], steps, i + 1)
    index
      ? obj[name][index]
        ? delete obj[name][index]
        : propNotFound(obj[name], index)
      : obj[name]
        ? delete obj[name]
        : propNotFound(obj[name])
  };

  return {
    delete: () => {
      const propPath = path.split('.');
      recursiveDeletion(obj, propPath, 0);
    }
  }
};

const propNotFound = (prop, index) => {
  if (!prop) throw new Error('Object property with such name does not exist.')
  if (!prop[index]) throw new Error('Array element with such index does not exist.')
}

const nestedPropertyDeleter = NestedPropertyDeleter(sampleObj, 'propA[2].propD[5]');
nestedPropertyDeleter.delete();
console.log(sampleObj)