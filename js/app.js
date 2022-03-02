

const searchFood = () => {
    // added eventlishener to get search input value
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = "";

    // hiding error when new search is given
    document.getElementById('no-input-error-message').style.display = 'none';

    // showing error if no input is given
    if (searchText == '') {
        document.getElementById('no-input-error-message').style.display = 'block';
    }
    else {

        // fetching all phones from API
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
    }
}
const displaySearchResult = datas => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // hiding error when new search is given
    document.getElementById('wrong-input-error-message').style.display = 'none';

    // showing error if no name are matched in the object
    if (datas.length == 0) {
        document.getElementById('wrong-input-error-message').style.display = 'block';
    }
    else {

        // slicing the object to show only 20 results
        const items = datas.slice(0, 20)
        items.forEach(data => {
            const div = document.createElement('div')
            div.classList.add('col');
            // Showing results of search name
            div.innerHTML = `
        <div class="card p-3 d-flex justify-content-center align-items-center rounded-3 shadow m-2">
        <img src="${data.image}" class="card-img-top img-fluid mx-auto" alt="..." style="width:220px;height:280px;">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <h5 class="card-title">${data.phone_name}</h5>
        </div>
        <div>
        <button onclick="loadPhoneDetail('${data.slug}')" class="btn btn-danger" type="button" id="button-search">Details</button>
        </div>
         </div>
        `;
            searchResult.appendChild(div);
        })
    }
}

// fetching details from API
const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

// Details section
const displayPhoneDetails = phone => {

    // adding eventlishener to add a div with class
    const phoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    phoneDetails.textContent = '';
    div.classList.add('card')

    // Checking if Release Date is available or not
    const releaseDate = phone?.releaseDate;
    let finalRelease = '';
    if (releaseDate == '') {
        finalRelease = "Coming Soon";
    }
    else {
        finalRelease = releaseDate;
    }

    // Checking if others property is available or not
    const others = phone?.others;
    let avaiOthers = [];
    if (others) {
        avaiOthers = others;
    }
    else {
        avaiOthers = phone.others = { WLAN: 'Not data available', Bluetooth: 'Not data available', GPS: 'Not data available', NFC: 'Not data available', Radio: 'Not data available', USB: 'Not data available' }
    }

    // Showing the details section
    div.innerHTML = `
        <div class="row g-0 shadow">
                <div class="col-md-4 p-5">
                    <img src="${phone.image}" class="img-fluid mx-auto" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.name}</h5>
                    <p class="card-text"><span class="fw-bold">Release Date: </span>${finalRelease}</p>
                    <p class="card-text"><span class="fw-bold">Main Features</p>
                    <p class="card-text"><span class="fw-bold">Storage: </span>${phone.mainFeatures.storage}</p>
                    <p class="card-text"><span class="fw-bold">Display: </span>${phone.mainFeatures.displaySize}</p>
                    <p class="card-text"><span class="fw-bold">Chipset: </span>${phone.mainFeatures.chipSet}</p>
                    <p class="card-text"><span class="fw-bold">Memory: </span>${phone.mainFeatures.memory}</p>
                    <p class="card-text"><span class="fw-bold">Sensors: </span>${phone.mainFeatures.sensors}</p>
                    <p class="card-text"><span class="fw-bold">Other Features</p>
                    <p class="card-text"><span class="fw-bold">Bluetooth: </span>${avaiOthers.Bluetooth}</p>
                    <p class="card-text"><span class="fw-bold">WLAN: </span>${avaiOthers.WLAN}</p>
                    <p class="card-text"><span class="fw-bold">GPS: </span>${avaiOthers.GPS}</p>
                    <p class="card-text"><span class="fw-bold">NFC: </span>${avaiOthers.NFC}</p>
                    <p class="card-text"><span class="fw-bold">Radio: </span>${avaiOthers.Radio}</p>
                    <p class="card-text"><span class="fw-bold">USB: </span>${avaiOthers.USB}</p>
                    </div>
                </div>
            </div>
        `

    phoneDetails.appendChild(div)
    // window scroll to top when clicked
    window.scrollTo(0, 0);
}
