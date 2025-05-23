const form = document.getElementById("fruitForm");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("fruitName");
    const price = document.getElementById("fruitPrice");

    const nameValue = name.value;
    const priceValue = price.value;

    const fruitObj = {
        name: nameValue,
        price: priceValue
    };

    fetch("http://127.0.0.1:63013/fruits", {method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify(fruitObj)}).then((response)=>{
        const visszateres = response.json();
        visszateres.then((value)=>{
            console.log(value);
        });
    });
})