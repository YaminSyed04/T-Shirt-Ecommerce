// Selecting a size
document.querySelectorAll('.size-box').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.size-box').forEach(function(item) {
            item.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

// Adding items to the cart
document.querySelector('.add-to-cart').addEventListener('click', function() {
    var selectedItem = document.querySelector('.size-box.selected');
    if (!selectedItem) {
        alert('Please select a size before adding to cart.');
        return;
    }

    var size = selectedItem.textContent;
    var price = 75; // Assuming the price is always $75.
    var quantity = 1;

    // Check if in the cart
    var existingCartItem = document.querySelector('.cart-items li[data-size="' + size + '"]');
    if (existingCartItem) {
        // If the item already exists
        quantity = parseInt(existingCartItem.getAttribute('data-quantity')) + 1;
        existingCartItem.textContent = quantity + 'x $' + price.toFixed(2) + ' (' + size + ')';
        existingCartItem.setAttribute('data-quantity', quantity);
    } else {
        // If the item does not exist
        var newItem = document.createElement('li');
        newItem.textContent = quantity + 'x $' + price.toFixed(2) + ' (' + size + ')';
        newItem.setAttribute('data-size', size);
        newItem.setAttribute('data-quantity', quantity);

        // Add the image next to the size in the cart
        var cartImage = document.createElement('img');
        cartImage.src = 'images/tshirt.png';
        cartImage.alt = 'T-shirt';
        cartImage.classList.add('cart-image');
        newItem.appendChild(cartImage);

        document.querySelector('.cart-items').appendChild(newItem);
    }

    // Show the cart dropdown
    document.querySelector('.cart').style.display = 'block';
});

// Closing the cart
document.querySelector('.cart').addEventListener('click', function() {
    var cart = document.querySelector('.cart');
    cart.style.display = 'none';
});

document.querySelector('.cart-text').addEventListener('click', function() {
    var cart = document.querySelector('.cart');
    cart.style.display = (cart.style.display === 'none' || cart.style.display === '') ? 'block' : 'none';
});
