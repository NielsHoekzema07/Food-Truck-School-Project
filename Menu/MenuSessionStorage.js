// MenuSessionStorage.js
$(document).ready(function () {
  const products = {
    0: { name: "ThaiShrimp", price: 12.50 },
    1: { name: "ThaiSpiesjes", price: 11.50 },
    2: { name: "Springrolls", price: 11.00 },
    3: { name: "ChinPing", price: 13.00 },
    4: { name: "BbqChicken", price: 15.00 },
    5: { name: "CheeseCups", price: 10.00 }
  };

  $(".addBtn").on("click", function () {
    const index = $(".addBtn").index(this);
    const product = products[index];
    
    if (product) {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || { items: [], totalPrice: 0 };
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
    }
  });
});

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