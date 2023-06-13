// let products =[
//     { id:1,
//      picture:"https://i.postimg.cc/7ZFP7KSF/sinc.jpg",
//      name: "F.S Yousuf",
//      title:"Sincerely",
//     cost : "R300,00",
//     },
//     { id:2,
//          picture:"https://i.postimg.cc/q7bDtFfr/rkrk.png",
//          name: "Rupi Kaur",
//          title: "Milk and Honey",
//         cost : "R250,00",
//     },
//     { id:3,
//          picture:"https://i.postimg.cc/2yTjpmbv/tsahf.jpg",
//          name: "Rupi Kaur",
//          title: "The sun and her flowers",
//          cost : "R200,00",
//     },
//     { id:4,
//          picture:"https://i.postimg.cc/8zd7w8wR/9n.jpg",
//          name: "Coleen Hoover",
//          title: "9 November",
//          cost : "R250,00",
//     },
//     { id:5,
//      picture:"https://i.postimg.cc/SxQNc2B7/sfse.jpg",
//      name: "Coleen Hoover",
//      title: "Ugly Love",
//      cost : "R250,00",
// },
    
//  ]

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
                    picture: "https://i.postimg.cc/8zd7w8wR/9n.jpg",
                    name: "Rupi Kaur",
                    title: 'The sun and her flowers',
                    cost: 'R200,00',
                },
                {
                    id: 4,
                    picture: "https://i.postimg.cc/2yTjpmbv/tsahf.jpg",
                    name: "Coleen Hoover",
                    title: '9 November',
                    cost: 'R250,00',
                },
                {
                    id: 5,
                    picture: "https://i.postimg.cc/8zd7w8wR/9n.jpg",
                    name: "Coleen Hoover",
                    title: 'Ugly Love',
                    cost: 'R250,00',
                },

            ]
        ))
 // let divChrome = document.querySelector(".container");
 // de.forEach(element => {
 // });
 let divStyle = document.querySelector(".product");
 products.forEach((reader)=> {
     divStyle.innerHTML += `
     <div class="card" style="width: 18rem;">
  <img src="${reader.picture}" class="card-img-top " alt="..." style="height:22rem;">
  <div class="card-body">
    <h5 class="card-title">${reader.title}</h5>
    <p class="card-text">${reader.name}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
     `
 })
