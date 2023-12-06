class Todo {
    static runningId = 1
     constructor (id,description,done=false){
     this.id= id ?? Todo.runningId++
     this.description = description
     this.done=done 
    }
    getTodo(){
        return {id,description,done}
    }
    setDescription(newdescription){
        this.description=newdescription
    }
    setDone(newDone){
        this.done=newDone
    }
}
//module.exports= {Todo}
export {Todo}
    