$(() => {
    const books = [
        { name: 'Bröd Bröd Bröd', price: 179, id: 1, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/bröd.jpg', category: 'Kockbok' },
        { name: 'JavaScript & jQuery', price: 349, id: 2, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/JS-jQuery.png', category: 'IT & dator' },
        { name: 'Beartown', price: 79, id: 3, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/beartown.jpg', category: 'Skönlitteratur' },
        { name: 'Det', price: 69, id: 4, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/det.jpg', category: 'Deckare & thriller' },
        { name: 'Ingrid träffar djuren', price: 69, id: 5, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/Ingrid träffar djuren.jpg', category: 'Barnböcker' },
        { name: 'Machbeth', price: 25, id: 6, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/machbeth.jpg', category: 'Deckare & thriller' },
        { name: 'Sous-vide', price: 239, id: 7, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/sous-vide.jpg', category: 'Kockbok' },
        { name: 'Sous vide', price: 329, id: 8, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/sous-vide2.jpg', category: 'Kockbok' },
        { name: 'Us against you', price: 89, id: 9, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/us-against-you.jpg', category: 'Skönlitteratur' },
        { name: 'Stängda kista', price: 49, id: 10, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/stängd-kista.jpg', category: 'Deckare & thriller' },
        { name: 'Body language', price: 129, id: 11, description: 'Låga priser & snabb leverans! Snabba leveranser. Fri frakt över 149kr.', picture: 'img/body-language.jpg', category: 'Skönlitteratur' },
        


    ];
    //
    // console.log(books);
    let cart = [];

    const appendList = (array, location) => {

        const template = array.map((item, id) => {
            return `
 <li class="book col-3">
 <img src="${item.picture}" alt="${item.description}">
 <div class="book-content">
 <h4>${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small></h4>
 <p>${item.description}</p>
 </div>
 <button type="button" id="${item.id}">KÖP</button>
 </li>
 `;
        });
        $(location).html(template);
    }
    const addToCart = (array, id, location) => {
        //a = book, if the buttons id is equal to the books id, add it to the cart
        let a = array.find(i => i.id === id);

        cart.push(a);

        const item = `
    <li class="item" id="${a.id}">
    <h5>${a.name}</h5>
    <button type="button">ta bort</button>
    </li>
    `;

        $('span.amount').text(cart.length);
        $(location).append(item);
    }

    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    }

    //för att kunna lägga till en bok flera gånger i kundvagnen
    const populateCart = (array, location) => {
        let item = `
 
    <li class"item" id="${array.id}">
    <h5>${array.name}</h5>
    <button type="button">ta bort</button>
    </li>
    `;

        $('span.amount').text(array.length);
    }
    appendList(books, $('.book-list'));

    $('.book').on('click', 'button', (e) => {
        let id = e.currentTarget.id;
        // +id : the + sign makes it a number
        addToCart(books, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });
});
