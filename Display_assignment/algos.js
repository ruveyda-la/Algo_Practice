// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.


 class SLL {
    constructor(val){
        this.value = val;
        this.next = null
    }
     addFront(value) {
        var newNode = new SLL(value);
        newNode.next=this.head;
        this.head=newNode;
        return this.head
    	
    }
    removeFront(){
        var beginner = this.head
        this.head = beginner.next;
        beginner.next =null
        return this.head
    }

    front(){
        if (this.head){
            return this.head.value;
        }
        else{
            return null
        }

    }

    display(){
        let node = this.head;
        var str = ""
        if(this.head == null){
            return str
        }
        
        while (this.head) {
            str += this.head.value + " ";
            this.head=this.head.next
        }
        return str;  
        }
    
 }
  var mySLL =new SLL(15);
  mySLL.addFront(35);
  mySLL.addFront(10);
//   mySLL.removeFront();
//   mySLL.front();
  console.log(mySLL.display())
   





// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.





// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.


