function generateRestaurantInfoHTML(j) {
    return /*html*/ `
        <div>
            <div><img src="${j.image}" alt=""></div>
        </div>
        <div class="logo-wrapper">
            <div>
                <div>
                    <div><img src="${j.logo}" alt=""></div>
                </div>
            </div>
        </div>
        <div class="restaurant-details">
            <div>
                <h1 class="text-color">${j.name}</h1>
                <div class="review-wrapper">
                    <div>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655z"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655z"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655z"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655z"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.288 14.449l-4.183-2.197a.219.219 0 00-.21 0L3.713 14.45 4.5 9.794a.254.254 0 000-.193L1.07 6.302l4.673-.682a.228.228 0 00.166-.114L8 1.271l2.091 4.235a.227.227 0 00.167.114l4.672.682-3.386 3.3a.254.254 0 00-.061.192l.805 4.655zm-8.4-7.228l1.487 1.435a1.54 1.54 0 01.438 1.356l-.35 2.04 1.828-.963a1.505 1.505 0 011.418 0l1.829.962-.35-2.039a1.539 1.539 0 01.437-1.356l1.488-1.435-2.048-.297a1.531 1.531 0 01-1.19-.84L8 4.229l-.875 1.855a1.531 1.531 0 01-1.155.875l-2.082.262z"></path>
                        </svg>
                        <span class="text-color">${j.reviews}&nbsp;Bewertungen</span>
                    </div>
                    <div class="delivery-info text-color">
                        <div>
                            <div>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M8 14.781A6.782 6.782 0 1114.781 8 6.79 6.79 0 018 14.781zm0-12.25A5.469 5.469 0 108 13.47 5.469 5.469 0 008 2.53z"></path><path d="M10.284 10.31l-2.94-1.759V4.5h1.312v3.308l2.31 1.382-.682 1.12z"></path>
                                </svg>
                                <p>${j.deliveryTime}</p>
                            </div>
                            <div>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M12.996 4.719h-2.371V2.53L9.313 1.22H6.688L5.375 2.53V4.72H3.004l-.429 8.452a1.523 1.523 0 001.531 1.61h7.788a1.522 1.522 0 001.531-1.61l-.429-8.452zM6.688 2.53h2.625V4.72H6.688V2.53zM12.05 13.4a.219.219 0 01-.157.07H4.106a.228.228 0 01-.218-.219l.358-7.21h7.508l.359 7.21a.22.22 0 01-.062.149z"></path>
                                </svg>
                                <p>${j.minPurchase}</p>
                            </div>
                            <div>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M12.139 7.405L11 4.159a.218.218 0 010-.158.246.246 0 01.158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 00-.998 1.934l.359 1.015H9.75a2.433 2.433 0 00-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 00-.735-.105 2.826 2.826 0 102.826 2.818v-.201l1.969-2.66a1.111 1.111 0 01.875-.438h.831l.254.718a2.844 2.844 0 101.313-.219h-.01zM4.08 11.719a1.514 1.514 0 111.514-1.514 1.505 1.505 0 01-1.514 1.514zm7.875 0a1.514 1.514 0 111.4-.933 1.505 1.505 0 01-1.4.933z"></path>
                                </svg>
                                <p>${j.shipping}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    `;
};


function generateEmptyCartHTML() {
    return /*html*/ `
        <div class="empty-cart-bottom">
            <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                <path d="M12.996 4.719h-2.371V2.53L9.313 1.22H6.688L5.375 2.53V4.72H3.004l-.429 8.452a1.523 1.523 0 001.531 1.61h7.788a1.522 1.522 0 001.531-1.61l-.429-8.452zM6.688 2.53h2.625V4.72H6.688V2.53zM12.05 13.4a.219.219 0 01-.157.07H4.106a.228.228 0 01-.218-.219l.358-7.21h7.508l.359 7.21a.22.22 0 01-.062.149z"></path>
            </svg>
            <div class="text-color">Fülle deinen Warenkorb</div>
            <span class="text-color">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
        </div>
    `;
};


function checkIfSelected(dish, dishName, categoryIndex, j, dishCount) {
    let iconHTML = '';
    let cartIndex = cart.dishes.indexOf(dishName);
    if (cartIndex != -1) {
        iconHTML = /*html*/ `
            <div>
                <div>
                    ${cart.amounts[cartIndex]}
                </div>
            </div>
            `;
    } else {
        iconHTML = /*html*/ `
            <div>
                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                     <path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z"></path>
                </svg>
            </div>
            `;
    }
    return generateDishCardHTML(dish, categoryIndex, j, iconHTML, dishCount);
};





function generateDishCardHTML(dish, categoryIndex, j, iconHTML, dishCount) {
    return /*html*/ `
        <div class="p-rel" id="dishCard${dishCount}">
            <button onclick="addToCart(${categoryIndex}, ${j}, ${dishCount})" class="dish-card text-color">
                <div>
                    <h3>${dish.name}</h3>            
                    <p>${dish.description}</p>
                    <span>${dish.price.toFixed(2)} €</span>                
                </div>
                <img src="${dish.img}" alt="">
            </button>
            <div onclick="addToCart(${categoryIndex}, ${j}, ${dishCount})" class="card-icon-top-right">
                ${iconHTML}
            </div>
        </div>
        `;
};


function generateCategoryTitleHTML(category) {
    return /*html*/ `
        <h2 class="categories text-color">${category}</h2>`;
};


function generateCartItemHTML(dish, amount, price, index, isNote) {
    return /*html*/ `
        <div id="cartItem${index}" class="cart-item">
            <div class="cart-item-info">
                <div class="p-rel">
                    <span>${amount}</span>
                    <div class="d-flex">
                        <h4>${dish}</h4>
                        <div class="cart-item-price">${(price * amount).toFixed(2)} €</div>
                    </div>
                    <div class="d-flex">
                        ${isNote}
                        <div class="gap">
                            <button onclick="decreaseCartItem(${index})">
                            <div>
                                <svg viewBox="0 0 16 16" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H1.875v1.312h12.25V7.344z"></path>
                                </svg>
                            </div>
                        </button>
                            <button onclick="increaseCartItem(${index})">
                            <div>
                                <svg viewBox="0 0 16 16" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z"></path>
                                </svg>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="noteBox${index}"></div>
            <div id="noteInputArea${index}"></div>
        </div>
    `;
};


function noteInputHTML(dish, amount, price, index) {
    let isNote = '';
    notes = cart.notes[index].length;
    if (notes === 0) {
        isNote = /*html*/ `
            <p class="hover-pointer dish-notes" onclick="openNoteInput(${index})">Anmerkung hinzufügen</p>
            `;
    } else {
        isNote = /*html*/ `<p></p>`;
    }
    return generateCartItemHTML(dish, amount, price, index, isNote)
};


function generateCartBottomHTML(total, price) {
    return /*html*/ `
        <div class="cart-bottom-top">
            <div>
                <span>Zwischensumme</span>
                <span>${price.toFixed(2)} €</span>
            </div>
            <div>
                <span>Lieferkosten</span>
                <span>${firstRestaurant.shipping}</span>
            </div>
            <div>
                <span>Gesamt</span>
                <span>${total.toFixed(2)} €</span>
            </div>
        </div>
    `;
};


function generateOrderBtnHTML(total, size) {
    return /*html*/ `
        <button onclick="forwardOrder()" id="orderBtn${size}" class="order-btn-inactive">
            <span>Bezahlen (${total.toFixed(2)} €)</span>
        </button>
    `;
};


function generateOpenCartBtnHTML(total, items) {
    return /*html*/ `
        <button onclick="openMobileCart()" id="openCartBtn" class="order-btn-active">
            <span>
                <span>
                    <div>${items}</div>
                    <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                        <path d="M6.031 11.5L5.594 8h1.312l.438 3.5H6.03zM9.094 8l-.438 3.5H9.97l.437-3.5H9.094zM15 5.594v1.312h-.752l-.945 5.714a1.522 1.522 0 01-1.506 1.286H4.202a1.522 1.522 0 01-1.505-1.286l-.945-5.714H1V5.594h3.876L5.918 2.75h1.39L6.25 5.594h3.5L8.691 2.75h1.391l1.042 2.844H15zm-2.082 1.312H3.082l.874 5.504a.219.219 0 00.21.184h7.595a.219.219 0 00.21-.184l.946-5.504z"></path>
                    </svg>
                </span>Warenkorb (${total.toFixed(2)} €)
            </span>
        </button>
    `;
};


function generateMinValueInfoHTML(minValue, difference, restaurant) {
    return /*html*/ `
        <div class="minValue-info-wrapper">
            <div>
                <div class="top-minValue-info">
                    <div>
                        <div>Benötigter Betrag, um den Mindestbestellwert zu erreichen</div>
                        <div class="d-block">${difference.toFixed(2)} €</div>
                    </div>
                </div>
                <div class="bottom-minValue-info">
                    <div>
                        Leider kannst du noch nicht bestellen. ${restaurant} liefert erst ab einem Mindestbestellwert von ${minValue.toFixed(2)} € (exkl. Lieferkosten).
                    </div>
                </div>
            </div>
        </div>
    `;
};


function getInputFieldHTML(i, note) {
    return /*html*/ `
        <form onsubmit="addNote(${i}); return false;">
            <div class="textarea-wrapper">
                <textarea id="input${i}" autocomplete="off" cols="20" rows="2" maxlength="80" class="textarea" placeholder="" type="text" onkeydown="handleTextareaKeydown(event, ${i})" required>${note}</textarea>
            </div>
            <div class="input-button-wrapper">
                <span onclick="closeNoteInput(${i})">Abbrechen</span>
                <span onclick="addNote(${i})" type="submit">Hinzufügen</span>
            </div>
        </form>
    `;
};


function getEditInputFieldHTML(i, note) {
    return /*html*/ `
        <form onsubmit="addNote(${i}); return false;">
            <div class="textarea-wrapper">
                <textarea id="input${i}" autocomplete="off" cols="20" rows="2" maxlength="80" class="textarea" placeholder="" type="text" onkeydown="handleTextareaKeydown(event, ${i})" required>${note}</textarea>
            </div>
            <div class="input-button-wrapper">
                <span onclick="deleteNote(${i})">Löschen</span>
                <span onclick="addNote(${i})" type="submit">Speichern</span>
            </div>
        </form>
    `;
};


function getNoteHTML(i, note) {
    return /*html*/ `
        <div class="notes">
            <span id="note${i}">${note}</span>
            <div>
                <span onclick="editNote(${i})">Anmerkung bearbeiten</span>
            </div>
        </div>
    `;
};


function getEmptyNotePopup() {
    return /*html*/ `
        <div class="empty-note-popup" onclick="closeEmptyNotePopup()">
            <!-- <div></div> -->
            <div>
                <h2>Die Notiz muss eine Eingabe haben</h2>
            </div>
        </div>
    `;
};


// function getGratitudeMessageHTML() {};
// return /*html*/ `
//         <div class="gratitude-wrapper"></div>
//     `;