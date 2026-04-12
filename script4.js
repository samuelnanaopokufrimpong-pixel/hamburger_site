const regions = {
    "Greater Accra": ["Accra", "Tema", "Ashaiman", "Teshie"],
    "Ashanti": ["Kumasi", "Obuasi", "Asante Mampong"],
    "Eastern": ["Koforidua", "Akim Oda", "Somanya"],
    "Central": ["Cape Coast", "Winneba", "Elmina"],
    "Western": ["Takoradi", "Sekondi", "Effia"],
    "Western North": ["Sefwi Wiawso", "Wiawso"],
    "Volta": ["Ho", "Kpando", "Aflao"],
    "Oti": ["Dambai", "Nkwanta"],
    "Northern": ["Tamale", "Yendi", "Savelugu"],
    "Savannah": ["Damongo", "Bole"],
    "North East": ["Nalerigu", "Gambaga"],
    "Upper East": ["Bolgatanga", "Navrongo"],
    "Upper West": ["Wa", "Jirapa"],
    "Bono": ["Sunyani", "Berekum"],
    "Bono East": ["Techiman", "Ejura"],
    "Ahafo": ["Goaso", "Bechem"]
};

const regionSelect = document.getElementById('regionSelect');
const citySelect = document.getElementById('citySelect');

regionSelect.addEventListener('change', () => {
    const selectedRegion = regionSelect.value;
    citySelect.innerHTML = '<option>Select City/Town</option>';
    if(regions[selectedRegion]) {
        regions[selectedRegion].forEach(city => {
            let opt = document.createElement('option');
            opt.value = city;
            opt.text = city;
            citySelect.appendChild(opt);
        });
    }
});

// ====== CART SETUP ======
let cart = [];
let cartTotal = 0;
const menuPrices = {
    "Chicken Burger": 5.00,
    "Sandwich": 5.95,
    "Hamburger": 6.75,
    "Cheese Burger": 7.50,
    "Beef Burger": 6.75,
    "Wraps": 6.00
};

const paymentModal = document.getElementById('paymentModal');
const successMessage = document.getElementById('successMessage');
const cartBar = document.getElementById('cartBar');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutTotal = document.getElementById('checkoutTotal');

// ====== ORDER BUTTON CLICK ======
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const itemDiv = btn.closest('.menu-item');
        const itemName = itemDiv.querySelector('h3').innerText;
        const itemPrice = menuPrices[itemName];

        // Add to cart
        cart.push({name: itemName, price: itemPrice});
        cartTotal += itemPrice;

        // Update cart bar
        document.getElementById('cartCount').innerText = cart.length;
        document.getElementById('cartTotal').innerText = cartTotal.toFixed(2);

        // Show cart bar
        cartBar.style.display = 'flex';
    });
});

// ====== CART BAR CLICK ======
cartBar.addEventListener('click', () => {
    checkoutItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        checkoutItems.appendChild(li);
    });
    checkoutTotal.innerText = cartTotal.toFixed(2);
    checkoutModal.style.display = 'flex';
});

// ====== PROCEED TO PAYMENT ======
document.getElementById('proceedToPay').addEventListener('click', () => {
    checkoutModal.style.display = 'none';
    paymentModal.style.display = 'flex';
    // Reset inputs
    document.getElementById('accountInput').value = '';
    document.getElementById('pinInput').value = '';
    successMessage.style.display = 'none';
    document.getElementById('accountInput').style.display = 'block';
    document.getElementById('pinInput').style.display = 'block';
    document.getElementById('confirmPay').style.display = 'block';
});

// ====== CONFIRM PAYMENT ======
document.getElementById('confirmPay').addEventListener('click', () => {
    const acc = document.getElementById('accountInput').value.trim();
    const pin = document.getElementById('pinInput').value.trim();
    if(!acc || !pin) {
        alert('Please enter your number and PIN to complete payment.');
        return;
    }

    successMessage.style.display = 'flex';
    document.getElementById('accountInput').style.display = 'none';
    document.getElementById('pinInput').style.display = 'none';
    document.getElementById('confirmPay').style.display = 'none';

    // Reset cart
    cart = [];
    cartTotal = 0;
    document.getElementById('cartCount').innerText = 0;
    document.getElementById('cartTotal').innerText = '0.00';
});

// ====== CLOSE MODALS WHEN CLICK OUTSIDE ======
window.onclick = function(event) {
    if (event.target == paymentModal) paymentModal.style.display = "none";
    if (event.target == checkoutModal) checkoutModal.style.display = "none";
};

// ====== SEARCH MENU ======
document.getElementById('searchMenu').addEventListener('input', e => {
    const filter = e.target.value.toLowerCase();
    document.querySelectorAll('.menu-item').forEach(item => {
        if(item.textContent.toLowerCase().includes(filter)) {
            item.style.display = 'flex';
        } else item.style.display = 'none';
    });
});