const JSONParcer = () => {
    return {
        parse: string => {
            try {
                return JSON.parse(string);
            }
            catch(err) {
                return err;
            }
        }
    }
};

const obj = {
    prop: 'val'
}

const parcer = JSONParcer();
console.log(parcer.parse(JSON.stringify(obj)));