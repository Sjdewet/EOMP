let bookslist = [];

let products = JSON.parse(localStorage.getItem('products')) ? 
    JSON.parse(localStorage.getItem('products')) : 
        localStorage.setItem('products', 
        JSON.stringify( 
            [
                {
                    id: 1,
                    picture: "https://i.postimg.cc/7ZFP7KSF/sinc.jpg",
                    name: "F.S Yousuf",
                    title: 'Sincerely',
                    cost: 'R300,00',
                },
                {
                    id: 2,
                    picture: "https://i.postimg.cc/q7bDtFfr/rkrk.png",
                    name: "Rupi Kaur",
                    title: 'Milk and Honey',
                    cost: 'R250,00',
                },
                {
                    id: 3,
                    picture: "https://i.postimg.cc/2yTjpmbv/tsahf.jpg",
                    name: "Rupi Kaur",
                    title: 'The sun and her flowers',
                    cost: 'R200,00',
                },
                {
                    id: 4,
                    picture: "https://i.postimg.cc/8zd7w8wR/9n.jpg",
                    name: "Coleen Hoover",
                    title: '9 November',
                    cost: 'R250,00',
                },
                {
                    id: 5,
                    picture: "https://i.postimg.cc/SxQNc2B7/sfse.jpg",
                    name: "Coleen Hoover",
                    title: 'Ugly Love',
                    cost: 'R250,00',
                },

            ]
        ))
 // let divChrome = document.querySelector(".container");
 // de.forEach(element => {
 // });
 let adminInput = document.querySelector(".product");
 function bookData() {
    adminInput.innerHTML = "";
    products.forEach((content) => {
      adminInput.innerHTML += `
     <div class="card" style="width: 18rem;">
  <img src="${content.picture}" class="card-img-top " alt="..." style="height:22rem;">
  <div class="card-body">
    <h5 class="card-title">${content.title}</h5>
    <p class="card-text">${content.name}</p>
    <button class="btn btn-primary" conclick='checkoutItems(${JSON.stringify(content)})'>Add to cart</button>
  </div>
</div>
     `
 })
}
bookData()

function checkoutItems(content) {
    bookslist.push(content);
    localStorage.setItem('books', JSON.stringify(bookslist));
}
bookData()