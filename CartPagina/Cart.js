// Cart.js
$(document).ready(function () {
  // Initialiseer winkelwagen als deze niet bestaat
  if (!sessionStorage.getItem("cart")) {
    sessionStorage.setItem("cart", JSON.stringify({
    items: [],
    totalPrice: 0,
    customerInfo: {}
    }));
  }
  
  // Product mapping met bijgewerkte prijzen uit HTML
  const products = {
    0: { name: "ThaiShrimp", price: 12.50 },
    1: { name: "ThaiSpiesjes", price: 11.50 },
    2: { name: "Springrolls", price: 11.00 },
    3: { name: "ChinPing", price: 13.00 },
    4: { name: "BbqChicken", price: 15.00 },
    5: { name: "CheeseCups", price: 10.00 }
  };
  
  // Laad hoeveelheden bij het laden van de pagina
  $(".item").each(function () {
    const input = $(this).find(".aantal input");
    const id = input.attr("id");
    const product = products[id];
    
    if (product) {
    const cart = getCart();
    const cartItem = cart.items.find(item => item.id == id);
    
    if (cartItem) {
      input.val(cartItem.quantity);
      updateItemPrice($(this), cartItem.quantity, product.price);
    }
    }
  });
  
  // Event listener voor wijzigingen in hoeveelheid
  $(".aantal input").on("change", function () {
    const quantity = Math.max(0, Number($(this).val()));
    $(this).val(quantity);
    
    const id = $(this).attr("id");
    const product = products[id];
    const itemElement = $(this).closest(".item");
    
    if (product) {
    updateItemPrice(itemElement, quantity, product.price);
    updateCartItem(id, product.name, quantity, product.price);
    updateTotalPrice();
    }
  });
  
  // Initiële berekening van de totale prijs
  updateTotalPrice();
  
  // Voor menupagina toevoegen-knoppen
  $(".addBtn").on("click", function() {
    const index = $(".addBtn").index(this);
    const product = products[index];
    
    if (product) {
    const cart = getCart();
    const existingItem = cart.items.find(item => item.id == index);
    
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * product.price;
    } else {
      cart.items.push({
      id: index,
      name: product.name,
      price: product.price,
      quantity: 1,
      total: product.price
      });
    }
    
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.total, 0);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    
    showNotification("Item toegevoegd aan winkelwagen!");
    updateCartButtonCount();
    }
  });
  });
  
  // Helper functies
  function getCart() {
  return JSON.parse(sessionStorage.getItem("cart")) || { items: [], totalPrice: 0 };
  }
  
  function updateCartItem(id, name, quantity, price) {
  const cart = getCart();
  const existingItem = cart.items.find(item => item.id == id);
  
  if (existingItem) {
    existingItem.quantity = quantity;
    existingItem.total = quantity * price;
  } else {
    cart.items.push({
    id,
    name,
    price,
    quantity,
    total: quantity * price
    });
  }
  
  // Verwijder item als hoeveelheid 0 is
  cart.items = cart.items.filter(item => item.quantity > 0);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function updateItemPrice(itemElement, quantity, price) {
  const total = quantity * price;
  itemElement.find(".prijs").text(formatPrice(total));
  }
  
  function updateTotalPrice() {
  const cart = getCart();
  cart.totalPrice = cart.items.reduce((sum, item) => sum + item.total, 0);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  $(".eindPrijs").text(formatPrice(cart.totalPrice));
  }
  
  function formatPrice(amount) {
  return "€" + amount.toFixed(2).replace(".", ",");
  }
  
  function showNotification(message) {
  const notification = $("<div>").text(message).css({
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#4caf50",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    display: "none",
  });
  
  $("body").append(notification);
  notification.fadeIn(300).delay(1000).fadeOut(300, function() {
    $(this).remove();
  });
  }
  
  function updateCartButtonCount() {
  const cart = getCart();
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  $(".cart-count").remove();
  if (itemCount > 0) {
    $(".cartBtn").append(`<span class="cart-count">${itemCount}</span>`);
  }
  }