
let products =[
    { id:1,
     picture:"https://i.postimg.cc/T2JR4Kyj/Screenshot-2023-06-07-101925.png",
     name: "Dell Inspiron G15 5515 Ryzen 5 RTX 3050 Gaming Laptop ",
     title:"Dell Inspiron G15 5515 Ryzen 5 RTX 3050 Gaming Laptop ",
    cost : "R13 999,00",
    },
    { id:2,
         picture:"https://i.postimg.cc/5ttR3BN6/Screenshot-2023-06-07-093030.png",
         name: "DELL Inspiron 15 3511-0006 Core i5 Laptop",
         title: "DELL Inspiron 15 3511-0006 Core i5 Laptop",
        cost : "R12 999,00",
    },
    { id:2,
         picture:"https://i.postimg.cc/HnmKbfJC/Screenshot-2023-06-07-094001.png",
         name: "Lenovo IdeaPad 3 Athlon 3150U 8GB RAM 256GB SSD",
         title: "Lenovo IdeaPad 3 Athlon 3150U 8GB RAM 256GB SSD",
         cost : "R6 299,00",
    },
    { id:2,
         picture:"https://i.postimg.cc/xdTswrSB/setup.jpg",
         name: "cargo jeans",
         title: "Cargo",
         cost : "R600",
    },
    { id:2,
         picture:"https://i.postimg.cc/xdTswrSB/setup.jpg",
         name: "jacket",
         title: "Jacket",
         cost : "R 600",
    },
    { id:1,
         picture:"https://i.postimg.cc/xdTswrSB/setup.jpg",
         name: "Cargo",
         title:"Cargo",
         cost : "R550",
    },
 ]
 // let divChrome = document.querySelector(".container");
 // de.forEach(element => {
 // });
 let divStyle = document.querySelector(".product");
 products.forEach((reader)=> {
     divStyle.innerHTML += `
     <div class="cards-wrapper col-4">
     <div class="images">
     <img src="${reader.picture}" alt="${reader.namee}" loading="lazy" class="img-fluid">
     <h2>${reader.title}</h2>
     </div>
     <p class="price">${reader.cost}</p>
     </div>
     `
 })
