export function loadCart(){
    const cart =localStorage.getItem("cart");
    if(cart!=null){
        return JSON.parse(cart)
    }else{
        return[]
    }
}

export function addToCart(ProductId,qty){
    const cart =loadCart()

    const index= cart.findIndex(
        (item)=>{
            return item.ProductId == ProductId
        }
    )
    console.log(index)
    if(index ===-1){
        cart.push(
             {ProductId,qty}
        )
    }else{
        const newQty =cart[index].qty +qty
        if(newQty<=0){
            cart.splice(index,1)
        }else{
            cart[index].qty = newQty
        }
    }
    saveCart(cart)
    
}

export function saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart))
}

export function clearCart(){
    localStorage.removeItem("cart")
}

export function deleteItem(ProductId){
    const cart = loadCart()
  
    const index = cart.findIndex(
      (item)=>{
        return item.ProductId==ProductId
      }
    )
  
    if(index!=-1){
      cart.splice(index,1)
      saveCart(cart)
    }
}

    // addItem(item) {
    //     this.items.push(item);
    // }

    // removeItem(itemId) {
    //     this.items = this.items.filter(item => item.id !== itemId);
    // }

    // getTotalPrice() {
    //     return this.items.reduce((total, item) => total + item.price, 0);
    // }

    // getItems() {
    //     return this.items;
    // }

    // clearCart() {
    //     this.items = [];
    // }

    