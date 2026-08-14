const productcontainer = document.getElementById("products-container");

const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;

    products.forEach(product => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = "$" + product.price;

        let count = 0;

        const controls = document.createElement("div");
        controls.classList.add("controls");

        const decrementbtn = document.createElement("button");
        decrementbtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "ADD";

        const incrementbtn = document.createElement("button");
        incrementbtn.innerText = "+";

        incrementbtn.addEventListener("click", () => {
            count++;
            span.innerText = count;
        });

        decrementbtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                span.innerText = count === 0 ? "ADD" : count;
            }
        });

        controls.appendChild(decrementbtn);
        controls.appendChild(span);
        controls.appendChild(incrementbtn);

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(controls);

        productcontainer.appendChild(div);
    });
}

fetchProducts();