const buyapple1 = (amount) =>{
    if (amount < 5){
        //statikus függvénye a promise osztálynak
        //nem példányhoz köttött hanem a classon kereszül elérhető
        //paramétere minden lehet
        //promise példánnyal tér vissza, pending állapotú
        return Promise.resolve(`Van ${amount} almánk`);
    }
    else{
        return Promise.reject(`Nincs ${amount} almánk`);
    }
}

const res1 = buyapple1(4);
console.log(res1);//1
console.log(1);
//callback-et vár
res1.then(value =>{//3
    console.log(value);
    console.log(2);
});
//előbb fut le mint az async 
console.log(res1);//2
console.log(3);

const res2 = buyapple1(6);

res2.catch(error => {
    console.log(error)
    console.log(4);
});

//chain-elés

buyapple1(6).then(value =>{
    console.log(value);
}).catch(error =>{
    console.log(error);
    console.log(5);
});

const buyapple2 = (amount) =>{
    return new Promise((resolve, reject) =>{
        if (amount < 5){
            resolve(`Van ${amount} almánk`);
        }
        else{
            reject(`Nincs ${amount} almánk`);
        }
    });
}

buyapple2(4).then(value =>{
    console.log(value);
    console.log(6);
}).catch(error =>{
    console.log(error);
    console.log(7);
})

//settimeout -> 2 parameter, callback nincs pramétere és mennyi idővel való késleltetés

const buyapple3 = (amount) =>{
    return new Promise((resolve, reject) =>{
        if (amount < 5){
            setTimeout(() => {
                resolve(`Van ${amount} almánk`);
            }, 1000);
        }
        else{
            setTimeout(() => {
                reject(`Nincs ${amount} almánk`);
            }, 1000);
        }
    });
}

buyapple3(11).then(value =>{
    console.log(value);
    console.log(8);
}).catch(error =>{
    console.log(error);
    console.log(9);
});

//teszt