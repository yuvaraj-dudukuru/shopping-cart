const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parent
