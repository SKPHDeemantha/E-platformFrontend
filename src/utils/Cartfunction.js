export function loadCart() {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
}

export function addToCart(productId, qty = 1) {
  const cart = loadCart();

  const index = cart.findIndex((item) => item.productId === productId);

  if (index === -1) {
    cart.push({ productId, qty });
  } else {
    const newQty = cart[index].qty + qty;
    if (newQty <= 0) {
      cart.splice(index, 1); // Remove the item if quantity drops to zero or less
    } else {
      cart[index].qty = newQty; // Update quantity
    }
  }

  saveCart(cart);
}

export function deleteItem(productId) {
  const cart = loadCart();

  const index = cart.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    cart.splice(index, 1);
    saveCart(cart);
  }
}

export function clearCart() {
  try {
    localStorage.removeItem("cart");
  } catch (error) {
    console.error("Error clearing cart from localStorage:", error);
  }
}
