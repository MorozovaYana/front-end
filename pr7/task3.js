function main(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('error');
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('odd');
            }, 1000);
        } else {
            setTimeout(() => {
                reject('even');
            }, 2000);
        }
    });
}


main(3)
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });

    

main(4)
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });



main("text")
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });