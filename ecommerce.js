const productcontainer =
    document.getElementById("products-container");

for (let i = 0; i < 20; i++) {
    const div = document.createElement("div");

    const img = document.createElement("img");

    const title = document.createElement("h2");
    title.innerText = "Product Title";

    const price = document.createElement("h2");
    price.innerText = "$89";

    const decrementbtn = document.createElement("button");
    decrementbtn.innerText = "-";

    const incrementbtn = document.createElement("button");
    incrementbtn.innerText = "+";

    const span = document.createElement("span");
    span.innerText = "ADD";

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(decrementbtn);
    div.appendChild(span);
    div.appendChild(incrementbtn);

    productcontainer.appendChild(div);
}