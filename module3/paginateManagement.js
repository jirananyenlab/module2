const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require("./lib/paginate.js");
const products = require("./data/products.js");

function paginateManagement(items, rows) {
  let products = items
  let rowsPerPage = rows
  function showPageNumbers() {

    let n = getTotalPages(products, rowsPerPage)
    // const pagination2 = document.getElementsByClassName('pagination')
    // console.log(pagination2);
    const pagination = document.querySelector('.pagination')
    for (let i = 1; i <= n; i++) {
      const button = document.createElement('button')
      button.setAttribute('id', i)
      button.textContent = `${i}`
      pagination.appendChild(button)
      button.addEventListener('click', (e) => pageHandler(e))
    }

  }
  function showItemsOfCurrentPage(currentPageNumber) {

    let currentPage = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)

    const productsUl = document.querySelector('#products')

    for (const item of currentPage) {
      const liProduct = document.createElement('li')
      liProduct.textContent = `ID:${item.id}, NAME:${item.name}`
      productsUl.appendChild(liProduct)
    }

  }
  function pageHandler(event) {
    const liproduct = document.querySelectorAll('li')
    console.log(liproduct);
    const productsUl = document.querySelector('#products')
    for (const li of liproduct) {
       productsUl.removeChild(li)
    }  
    const btn = document.querySelectorAll('button')
    for (const btnItem of btn) {
      btnItem.style = 'border: 1px solid #999'
    } 
    
  const currBtn = document.getElementById(event?.target.id)
    if (currBtn === null || currBtn === undefined) {
          showItemsOfCurrentPage('1')
          const defaultBtn = document.getElementById('1')
          defaultBtn.style = 'background-color: LightSteelBlue;'
    }else{ 
      showItemsOfCurrentPage(event?.target.id)
      currBtn.style = 'background-color: LightSteelBlue;'
    }
   
  }
  return { showPageNumbers, showItemsOfCurrentPage, pageHandler }
}

module.exports = paginateManagement;
// export { paginateManagement }
 const { showPageNumbers, pageHandler, showItemsOfCurrentPage } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
// showItemsOfCurrentPage()