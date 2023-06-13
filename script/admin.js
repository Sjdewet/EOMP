let products = JSON.parse(localStorage.getItem('products'));

// let idNumber = products[products.length-1] ? products[products.length-1].id + 1: 1;
let addbook = document.querySelector('#addbook')
// Buttons
// let delete_button = document.querySelectorAll("#delete_btn")
let nameBook = document.querySelector('#name')
let author= document.querySelector('#author')
let price = document.querySelector('#price')
let picture = document.querySelector('#picture')
let adminInput = document.querySelector('#adminInput')
let title = document.querySelector('#title')
let dotoDelete;

// Delete button
function  deleteButtons(){
    dotoDelete = [...document.querySelectorAll(".close-btn")];
    dotoDelete.forEach((item) => {
        item.addEventListener('click', deleteItem)
    })
}

function deleteItem(event) {
    let startPoint = dotoDelete.indexOf(event.target);
            products.splice(startPoint, 1);
            localStorage.setItem("products", JSON.stringify(products))
            bookData();
}
// Edit button
function editItem(){
    editbtn = [...document.querySelectorAll('.edit-btn')];
    editbtn.forEach((item)=>{
        item.addEventListener('click', editTodoItem)
    })
    }
    function editTodoItem(){
        let newItem = prompt('Enter new Item:');
        let index = editbtn.indexOf(event.target);
        clientItems[index].name = newItem;
        localStorage.setItem("itemlist", JSON.stringify(clientItems))
        renderList();
    }

addbook.addEventListener('click', addData)

function addData(e){
    e.preventDefault();

    if(nameBook.value == '' && author.value == ''){
      alert('Inputs are empty')
    } else{
      products.push({
          id: 1,
          picture: picture.value,
          name: nameBook.value,
          title: title.value,
          cost: price.value,
      })
    }
   
    nameBook.value = ''
    author.value = ''
    price.value = ''
    picture.value = ''
    adminInput.value = ''
    title.value = ''
    bookData()
    localStorage.setItem('products', JSON.stringify(products))
}

function bookData(){
    adminInput.innerHTML = ''
    products.forEach((content) =>{
        adminInput.innerHTML += 
        `
                    <tr>
                      <th>${content.id}</th>
                      <th><img src="${content.picture}" class="" style="height:22rem;" alt=""></th>
                      <td>${content.name}</td>
                      <td>${content.title}</td>
                      <td>${content.cost}</td>
                      <td>
                      <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="delBtn"
                    >
                      Edit
                    </button>
                        <button id="delete_btn" class="close-btn">Delete</button>
                      </td>
                    </tr>
        `
      })
      localStorage.getItem('products')
      deleteButtons()
}

bookData()

