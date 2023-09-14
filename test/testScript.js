function renderDish() {
    let menuContent = document.getElementById('restaurantMenu');
    menuContent.innerHTML = '';
    for (const category in firstRestaurant.menu) {
        if (firstRestaurant.menu.hasOwnProperty(category)) {
            const dishes = firstRestaurant.menu[category];
            for (let j = 0; j < dishes.length; j++) {
                menuContent.innerHTML += checkIfSelected(dishes[j], dishes[j].name, categoryIndex, j);
            }
        }
    }
};