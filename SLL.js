class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(head=null){
        this.head = head;
    }

    push(data){
        if(this.head==null){
            this.head = new Node(data);
            return
        }
        else{ // 
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next
            }
            pointer.next = new Node(data);
            return
        }
    }
    

    push_to_front(data){
        if(this.head==null){
            this.head = new Node(data);
            return;
        }
        else{
            let next = this.head
            this.head = new Node(data);
            this.head.next = next
            return;
        }
    }
    pop_from_front(){
        if(this.head==null){
            return null;
        }
        else{
            let temp = this.head.data
            this.head = this.head.next
            return temp
        }
    }
    log(){
        if(this.head == null){
            console.log(null);
            return
        }
        else{
            console.log("*** start of list ***")
            let pointer = this.head;
            while(pointer != null){
                console.log(pointer.data);
                pointer = pointer.next;
            }
            console.log("*** end of list ***")
        }
    }
    contains(value){
        if(this.head == null){
            return false;
        }else{
            let pointer = this.head;
            while(pointer != null){
                if(pointer.data == value){
                    return true;
                }
                pointer = pointer.next;
            }
        }
        return false;
    }
    getMin(){
        if(this.head==null){
            return null;
        }else{
            let min = this.head.data;
            let pointer = this.head.next;
            while(pointer!=null){
                if(pointer.data < min){
                    min = pointer.data;
                }
                pointer = pointer.next;
            }
            return min;
        }
    }
    reverse(){
        
        if(this.head == null){
            return null;
        }
        else if(this.head.next == null){
            let temp = this.head.data;
            this.head = null;
            return temp
        }
        else{
            let pointer = this.head;
            while(pointer.next.next){
                let temp = pointer.next.data;
                this.head=new Node(temp)
                
                

            }
        }
        //
    }
}

var sll = new SLL()
sll.push(10)
sll.push(15)
sll.push(18)
// sll.log()
sll.push(7869)
sll.push(100)
// sll.log()
// sll.pop()
sll.log()
sll.reverse()
sll.log()
