window.addEventListener('resize', updateCartDisplay);
const firstRestaurant = restaurants[0];
const menuCategories = Object.keys(firstRestaurant.menu);
let mobileCartOpen = false;

loadCart();


function init() {
    isMobileCartOpen();
    getScreenSize();
    renderRestaurantInfo();
    renderDishes();
    isCartEmpty();
    checkTotalContainer();
    checkMinValue();
};


function refreshPage() {
    location.reload();
};


function renderRestaurantInfo() {
    const restaurantInfo = document.getElementById('restaurantInfo');
    restaurantInfo.innerHTML = '';

    for (let j = 0; j < restaurants.length; j++) {
        let restaurant = restaurants[j];
        restaurantInfo.innerHTML += generateRestaurantInfoHTML(restaurant);
    }
};


function renderDishes() {
    let menuContent = document.getElementById('restaurantMenu');
    menuContent.innerHTML = '';
    let categoryIndex = 0;
    let dishCount = 0;
    for (const category in firstRestaurant.menu) {
        if (firstRestaurant.menu.hasOwnProperty(category)) {
            menuContent.innerHTML += generateCategoryTitleHTML(category);
            const dishes = firstRestaurant.menu[category];
            for (let j = 0; j < dishes.length; j++) {
                dishCount++;
                menuContent.innerHTML += checkIfSelected(dishes[j], dishes[j].name, categoryIndex, j, dishCount);
            }
            categoryIndex++;
        }
    }

};


function renderSingleDish(i, categoryIndex, j, dishName, dish) {
    let dishCard = document.getElementById(`dishCard${i}`);
    dishCard.innerHTML = checkIfSelected(dish, dishName, categoryIndex, j, i);
};


function countCartItems() {
    let totalAmount = 0;
    for (let i = 0; i < cart.amounts.length; i++) {
        totalAmount += cart.amounts[i];
    }

    return totalAmount;
};


function addToCart(categoryIndex, dishIndex, dishCount) {
    const dish = firstRestaurant.menu[menuCategories[categoryIndex]][dishIndex];
    const dishName = dish.name;
    const dishPrice = dish.price;
    const index = cart.dishes.indexOf(dishName);
    if (index === -1) {
        cart.dishes.push(dishName);
        cart.prices.push(dishPrice);
        cart.amounts.push(1);
        cart.notes.push('');
    } else {
        cart.amounts[index]++;
    }
    updateCartDisplay();
    renderSingleDish(dishCount, categoryIndex, dishIndex, dishName, dish);
    saveCart();
};


function updateCartDisplay() {
    getScreenSize()
    checkTotalContainer();
    checkMinValue();
};


function updateCartItems(screen) {
    if (screen < 981) {
        cartItems = document.getElementById('mobileCart');
        cartItems.innerHTML = '';
    } else {
        cartItems = document.getElementById('shoppingCart');
        cartItems.innerHTML = '';
    }
    for (let i = 0; i < cart.dishes.length; i++) {
        cartItems.innerHTML += noteInputHTML(cart.dishes[i], cart.amounts[i], cart.prices[i], i);
        renderNotes(i);
    }
};


function renderNotes(i) {
    let noteBox = document.getElementById(`noteBox${i}`);
    let note = cart.notes[i][0];

    if (cart.notes[i].length > 0) {
        noteBox.innerHTML = '';
        noteBox.innerHTML += getNoteHTML(i, note);
    }
};


function checkTotalContainer() {
    checkIfMobile();
    if (isMobile) {
        size = 1;
        sumContainer = document.getElementById('mobileSumContainer')
    } else {
        sumContainer = document.getElementById('sumContainer');
        size = 2;
    }
    updateTotalPrice(sumContainer, size);
};


function updateTotalPrice(sumContainer, size) {
    if (cart.dishes.length > 0) {
        const sumArray = calculateTotalPrice();
        totalPrice = sumArray[1];
        price = sumArray[0];
        sumContainer.innerHTML = generateCartBottomHTML(totalPrice, price) + generateOrderBtnHTML(totalPrice, size);
    } else {
        sumContainer.innerHTML = '';
        isCartEmpty();
    }
};


function checkMinValue() {
    isMobile = checkIfMobile();
    let minValue = firstRestaurant.minValue;
    let restaurant = firstRestaurant.name;
    let difference = calculateDifference();
    if (isMobile) {
        orderButton = document.getElementById('orderBtn1');
        minValueInfo = document.getElementById('mobileInfoMinValue');
    } else {
        orderButton = document.getElementById('orderBtn2');
        minValueInfo = document.getElementById('infoMinValue');
    }
    updateMinValue(minValue, minValueInfo, restaurant, difference, orderButton);
};


function updateMinValue(minValue, minValueInfo, restaurant, difference, orderButton) {
    if (difference > 0 && difference != minValue) {
        minValueInfo.innerHTML = '';
        minValueInfo.innerHTML += generateMinValueInfoHTML(minValue, difference, restaurant);
        buttonToInactive(orderButton);
    }
    if (difference <= 0) {
        minValueInfo.innerHTML = '';
        buttonToActive(orderButton);
    }
};


function buttonToActive(button) {
    button.onclick = forwardOrder;
    if (button.classList.contains('order-btn-inactive')) {
        button.classList.remove('order-btn-inactive');
        button.classList.add('order-btn-active');
    }
};


function buttonToInactive(button) {
    button.onclick = null;
    if (button.classList.contains('order-btn-active')) {
        button.classList.remove('order-btn-active');
        button.classList.add('order-btn-inactive');
    }
};


function getScreenSize() {
    const screenSize = window.innerWidth;
    if (screenSize > 980) {
        closeMobileCart();
    }
    updateCartBtn(screenSize);
    updateCartItems(screenSize);
    isCartEmpty();
};


function checkIfMobile() {
    const screen = window.innerWidth;
    if (screen < 981) {
        isMobile = true;
    } else {
        isMobile = false;
    }
    return isMobile;
};


function updateCartBtn(screen) {
    if (screen <= 980) {
        activateCartButton();
    } else {
        deactivateCartButton();
    }
};


function activateCartButton() {
    items = countCartItems();
    sumArray = calculateTotalPrice();
    total = sumArray[1];
    mobileWrapper = document.getElementById('mobileBtnWrapper');
    mobileWrapper.innerHTML = '';
    mobileWrapper.innerHTML = generateOpenCartBtnHTML(total, items)
    mobileWrapper.classList.add('mobile-btn-wrapper');
    if (mobileWrapper.classList.contains('d-none')) {
        mobileWrapper.classList.remove('d-none');
    }
};


function deactivateCartButton() {
    mobileWrapper = document.getElementById('mobileBtnWrapper');
    mobileWrapper.classList.add('d-none');
    if (mobileWrapper.classList.contains('mobile-btn-wrapper')) {
        mobileWrapper.classList.remove('mobile-btn-wrapper');
    }
};


function decreaseCartItem(index) {
    if (cart.amounts[index] > 1) {
        cart.amounts[index]--;
    } else {
        cart.amounts.splice(index, 1);
        cart.dishes.splice(index, 1);
        cart.prices.splice(index, 1);
        cart.notes.splice(index, 1);
    }
    updateCartDisplay();
    renderDishes();
    isCartEmpty();
    saveCart();
};


function increaseCartItem(index) {
    cart.amounts[index]++;
    updateCartDisplay();
    renderDishes();
    saveCart();
};


function calculateTotalPrice() {
    let totalPrice = 0;

    for (let i = 0; i < cart.dishes.length; i++) {
        totalPrice += cart.amounts[i] * cart.prices[i];
    }
    let sum = totalPrice;
    totalPrice += firstRestaurant.shipCost;
    let sumArray = [sum, totalPrice];

    return sumArray;
};


function isCartEmpty() {
    isMobile = checkIfMobile();
    if (isMobile) {
        emptyCartInfo = document.getElementById('mobileCart');
        infoMinValue = document.getElementById('mobileInfoMinValue');
    } else {
        emptyCartInfo = document.getElementById('shoppingCart');
        infoMinValue = document.getElementById('infoMinValue');
    }
    if (cart.amounts.length < 1) {
        emptyCartInfo.innerHTML = '';
        emptyCartInfo.innerHTML += generateEmptyCartHTML();
        infoMinValue.innerHTML = '';
    }
};


function calculateDifference() {
    let sumArray = calculateTotalPrice();
    let cartValue = sumArray[0];
    let minValue = firstRestaurant.minValue;
    let difference = minValue - cartValue;
    return difference;
};


function openMobileCart() {
    isMobile = checkIfMobile();
    mobileCart = document.getElementById('mobileCartWrapper');
    if (mobileCart.classList.contains('d-none')) {
        mobileCart.classList.remove('d-none');
        mobileCart.classList.add('d-flex');
        document.getElementById('shoppingCart').innerHTML = '';
    } else {
        closeMobileCart();
    }
    if (isMobile) {
        document.body.style.overflow = 'hidden';
    }
    mobileCartOpen = true;
    updateCartDisplay();
    saveCart();
};


function closeMobileCart() {
    mobileCart = document.getElementById('mobileCartWrapper');
    if (mobileCart.classList.contains('d-flex')) {
        mobileCart.classList.remove('d-flex');
        mobileCart.classList.add('d-none');
        document.getElementById('mobileCart').innerHTML = '';
    }
    document.body.style.overflow = '';
    mobileCartOpen = false;
    saveCart();
};


function isMobileCartOpen() {
    if (mobileCartOpen) {
        openMobileCart();
    } else {
        closeMobileCart();
    }
};


function openNoteInput(i) {
    let note = '';
    let noteInputContainer = document.getElementById(`noteInputArea${i}`);
    noteInputContainer.innerHTML = getInputFieldHTML(i, note);
};


function closeNoteInput(i) {
    let noteInputContainer = document.getElementById(`noteInputArea${i}`);
    noteInputContainer.innerHTML = '';
    renderNotes(i);
};


function addNote(i) {
    let note = document.getElementById(`input${i}`).value;
    if (!cart.notes[i]) {
        cart.notes[i] = [];
    }
    if (note.length > 0) {
        if (cart.notes[i].length < 1) {
            cart.notes[i].push(note);
        } else {
            cart.notes[i][0] = note;
        }
        updateCartDisplay();
    } else {
        document.getElementById('noInputPopup').innerHTML = getEmptyNotePopup();
        document.body.style.overflow = 'hidden';
    }
    saveCart();
};


function closeEmptyNotePopup() {
    document.getElementById('noInputPopup').innerHTML = '';
    document.body.style.overflow = '';
};


function handleTextareaKeydown(event, index) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        addNote(index);
    }
};


function editNote(i) {
    let note = document.getElementById(`note${i}`).innerHTML;
    let noteInputContainer = document.getElementById(`noteInputArea${i}`);
    document.getElementById(`noteBox${i}`).innerHTML = '';
    noteInputContainer.innerHTML = '';
    noteInputContainer.innerHTML = getEditInputFieldHTML(i, note);
};


function deleteNote(i) {
    document.getElementById(`noteBox${i}`).innerHTML = '';
    document.getElementById(`noteInputArea${i}`).innerHTML = '';

    cart.notes[i].splice(0, 1);
    getScreenSize();
    saveCart();
};


function saveCart() {
    let cartJSON = JSON.stringify(cart);
    localStorage.setItem('cartData', cartJSON);

    let mobileCartString = JSON.stringify(mobileCartOpen);
    localStorage.setItem('mobileCartOpen', mobileCartString);
};


function loadCart() {
    let cartJSON = localStorage.getItem('cartData');
    let mobileCartString = localStorage.getItem('mobileCartOpen');
    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }
    if (mobileCartString) {
        mobileCartOpen = JSON.parse(mobileCartString);
    }
};


// function saveMobileCart() {
//     let mobileCartString = JSON.stringify(mobileCartOpen);
//     localStorage.setItem('mobileCartOpen', mobileCartString);
// };


// function loadMobileCart() {
//     let mobileCartString = localStorage.getItem('mobileCartOpen');
//     if (mobileCartString) {
//         mobileCartOpen = JSON.parse(mobileCartString);
//     }
// };


function forwardOrder() {};