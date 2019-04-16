const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('Conexão ok!!')}, 2000)
});

async function executaPromisse(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromisse();