function showTodoItem(newId,newDescription){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id' , newId)
    newDiv.setAttribute('class' , 'todoItem')
    const addTagDiv =  document.getElementById('listTodo')
    addTagDiv.append(newDiv)

    const newP = document.createElement('p')
    newP.textContent = newDescription
    const newBtn1 = document.createElement('button') 
    newBtn1.textContent='Not done'
    const newBtn2 = document.createElement('button')
    newBtn2.textContent='remove'
    const addTagEle =  document.getElementById(newId)
    addTagEle.append(newP)
    addTagEle.append(newBtn1)
    addTagEle.append(newBtn2)

}


function showNumberOfDone(numberOfDone){
    // const addTagDone =  document.getElementById('done')
    // addTagDone.append(numberOfDone)
    const Done = document.createElement('p')
    Done.textContent = 'Number of Done: ' + numberOfDone
    const summaryTodo = document.getElementById("summaryTodo") 
  // const addTagDone =  document.getElementById('notDone')
    const addTagDone =  summaryTodo.firstElementChild
    summaryTodo.replaceChild(Done,addTagDone)
    
}

function showNumberOfNotDone(numberOfNotDone){
  //  const notDone = document.createElement('p')
   // notDone.textContent  = 'Number of Not Done: ' + numberOfNotDone
    //const summaryTodo = document.getElementById("summaryTodo") 
   const addTagDone =  document.getElementById('notDone')
   addTagDone.textContent =  'Number of Not Done: ' +  numberOfNotDone
    // const addTagDone =  summaryTodo.lastElementChild
    // summaryTodo.replaceChild(notDone,addTagDone)


}
function removeTodoItem(removeId) {
    let remove = document.getElementById(removeId)
   const listTodo = document.getElementById("listTodo")
   listTodo.removeChild(remove)
}

export {showTodoItem , showNumberOfDone,showNumberOfNotDone,removeTodoItem}