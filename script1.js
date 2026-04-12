function openMenu() { document.getElementById("menu").classList.add("active"); }
function closeMenu() { document.getElementById("menu").classList.remove("active"); }
function goToNextPage(e) { e.preventDefault(); window.location.href = "web3.html"; }


const cities = {
    greaterAccra: ["Accra", "Tema", "Ashaiman", "Madina", "East Legon", "Adenta", "Kasoa", "Teshie"],
    ashanti: ["Kumasi", "Obuasi", "Ejisu", "Konongo", "Mampong"],
    northern: ["Tamale", "Yendi", "Savelugu", "Bimbilla", "Walewale"],
    eastern: ["Koforidua", "Nkawkaw", "Somanya", "Akyem Oda", "Akosombo"],
    central: ["Cape Coast", "Winneba", "Mankessim", "Ankobra", "Swedru"],
    western: ["Takoradi", "Sekondi", "Prestea", "Bibiani", "Axim"],
    volta: ["Ho", "Hohoe", "Kpando", "Aflao", "Sogakope"],
    oti: ["Dambai", "Nkwanta", "Kadjebi", "Nkwanta South", "Dabala"],
    savannah: ["Damongo", "Salaga", "Bole", "Yapei", "Tuna"],
    northEast: ["Nalerigu", "Bawku", "Zuarungu", "Zebilla", "Tolon"],
    upperEast: ["Bolgatanga", "Bawku", "Navrongo", "Zuarungu", "Sandema"],
    upperWest: ["Wa", "Tumu", "Nandom", "Lawra", "Jirapa"],
    bono: ["Sunyani", "Drua", "Berekum", "Dormaa Ahenkro", "Nkoranza"],
    bonoEast: ["Techiman", "Nkoranza", "Kintampo", "Yeji", "Wenchi"],
    ahafo: ["Goaso", "Bechem", "Manso", "Ntotroso", "Tepa"],
    westernNorth: ["Sefwi Wiawso", "Sefwi Bekwai", "Sefwi Adabokrom", "Sefwi Debiso", "Juaboso"]
};

const regionLabels = {
    greaterAccra: "Greater Accra",
    ashanti: "Ashanti",
    northern: "Northern",
    eastern: "Eastern",
    central: "Central",
    western: "Western",
    volta: "Volta",
    oti: "Oti",
    savannah: "Savannah",
    northEast: "North East",
    upperEast: "Upper East",
    upperWest: "Upper West",
    bono: "Bono",
    bonoEast: "Bono East",
    ahafo: "Ahafo",
    westernNorth: "Western North"
};

// Update city select when region changes
function updateCities(){
    const region = document.getElementById("region").value;
    const citySelect = document.getElementById("city");
    citySelect.innerHTML = '<option value="">Select City</option>';
    if(cities[region]){
        cities[region].forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Display all regions & cities after map
const allCitiesList = document.getElementById("allCitiesList");
for(const region in cities){
    const li = document.createElement("li");
    const citiesHtml = cities[region].map(city => `<li>${city}</li>`).join('');
    li.innerHTML = `
        <strong>${regionLabels[region] || region}</strong>
        <ul>${citiesHtml}</ul>
    `;
    allCitiesList.appendChild(li);
}

// Open Create Account Modal
function openCreateAccount() {
    const formHtml = `
    <div id="createAccountModal" style="
        position:fixed; top:0; left:0; width:100%; height:100%; 
        background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:1001;">
        <div style="background:white; padding:30px; border-radius:15px; width:90%; max-width:400px; position:relative;">
            <span style="position:absolute; top:10px; right:15px; cursor:pointer; font-size:25px;" onclick="closeCreateAccount()">&times;</span>
            <h2>Create New Account</h2>
            <form onsubmit="submitCreateAccount(event)">
                <input type="text" placeholder="Full Name" required style="width:100%; padding:10px; margin:10px 0; border-radius:8px; border:1px solid #ccc;">
                <input type="email" placeholder="Email" required style="width:100%; padding:10px; margin:10px 0; border-radius:8px; border:1px solid #ccc;">
                <input type="password" placeholder="Password" required style="width:100%; padding:10px; margin:10px 0; border-radius:8px; border:1px solid #ccc;">
                <button type="submit" style="width:100%; padding:12px; background:#e77e07; color:white; border:none; border-radius:12px; font-size:16px;">Create Account</button>
            </form>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}

// Close Create Account Modal
function closeCreateAccount() {
    const modal = document.getElementById('createAccountModal');
    if(modal) modal.remove();
}

// Handle Create Account Submission
function submitCreateAccount(e) {
    e.preventDefault();
    alert('Account created successfully!');
    closeCreateAccount();
}