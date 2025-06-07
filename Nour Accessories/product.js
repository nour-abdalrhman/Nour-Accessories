document.addEventListener('DOMContentLoaded', () => {

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name'); 
        alert(`${productName} Added to cart!`); 
      });
    });
  });

