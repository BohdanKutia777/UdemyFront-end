const getOwnProps = obj => {
    const result = [];
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result.filter(el => typeof obj[prop] !== 'function');
}