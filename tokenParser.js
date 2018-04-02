function auth() {
    return new Promise(resolve => {
        resolve({
            body: {
                access_token: '123_321'
            },
            info: {
                useless_info: 'foobar'
            }
        });
    });
}

async function print() {
    try {
        const testObj = {
            authorization: `Bearer ${((await auth()).body).access_token}`
        };

        console.log(testObj);
    }
    catch(err) {
        console.log(err);
    }
}