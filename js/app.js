const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = "";
    if (searchText == '') {
        const phoneDetails = document.getElementById('phone-details')
        const div = document.createElement('div');
        div.innerHTML = `
        <h1 class="text-danger text-center">Please Give a name</h1>
        `;
        phoneDetails.appendChild(div);
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
    }

}

const displaySearchResult = datas => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    datas.forEach(data => {
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-3 d-flex justify-content-center align-items-center rounded-3">
        <img src="${data.image}" class="card-img-top img-fluid mx-auto" alt="..." style="width:220px;height:280px;">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <h5 class="card-title">${data.phone_name}</h5>
        </div>
        <div class="">
        <button onclick="loadPhoneDetail('${data.slug}')" class="btn btn-primary" type="button" id="button-search">Details</button>
        </div>
         </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
    const phoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    phoneDetails.textContent = '';
    div.classList.add('card')
    const releaseDate = phone.releaseDate;
    if (releaseDate == '') {

        div.innerHTML = `
        <div class="row g-0">
                <div class="col-md-4 p-5">
                    <img src="${phone.image}" class="img-fluid mx-auto" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.name}</h5>
                    <p class="card-text"><span class="fw-bold">Release Date: </span>Coming Soon!!!</p>
                    <p class="card-text"><span class="fw-bold">Main Features</p>
                    <p class="card-text"><span class="fw-bold">Storage: </span>${phone.mainFeatures.storage}</p>
                    <p class="card-text"><span class="fw-bold">Display: </span>${phone.mainFeatures.displaySize}</p>
                    <p class="card-text"><span class="fw-bold">Chipset: </span>${phone.mainFeatures.chipSet}</p>
                    <p class="card-text"><span class="fw-bold">Memory: </span>${phone.mainFeatures.memory}</p>
                    <p class="card-text"><span class="fw-bold">Sensors: </span>${phone.mainFeatures.sensors}</p>
                    <p class="card-text"><span class="fw-bold">Bluetooth: </span>${phone.others.Bluetooth}</p>
                    <p class="card-text"><span class="fw-bold">Other Features</p>
                    <p class="card-text"><span class="fw-bold">WLAN: </span>${phone.others.WLAN}</p>
                    <p class="card-text"><span class="fw-bold">GPS: </span>${phone.others.GPS}</p>
                    <p class="card-text"><span class="fw-bold">NFC: </span>${phone.others.NFC}</p>
                    <p class="card-text"><span class="fw-bold">Radio: </span>${phone.others.Radio}</p>
                    <p class="card-text"><span class="fw-bold">USB: </span>${phone.others.USB}</p>
                    </div>
                </div>
            </div>
        `
    }
    else {
        div.innerHTML = `
        <div class="row g-0">
                <div class="col-md-4 p-5">
                    <img src="${phone.image}" class="img-fluid mx-auto" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.name}</h5>
                    <p class="card-text"><span class="fw-bold">Release Date: </span>${releaseDate}</p>
                    <p class="card-text"><span class="fw-bold">Main Features</p>
                    <p class="card-text"><span class="fw-bold">Storage: </span>${phone.mainFeatures.storage}</p>
                    <p class="card-text"><span class="fw-bold">Display: </span>${phone.mainFeatures.displaySize}</p>
                    <p class="card-text"><span class="fw-bold">Chipset: </span>${phone.mainFeatures.chipSet}</p>
                    <p class="card-text"><span class="fw-bold">Memory: </span>${phone.mainFeatures.memory}</p>
                    <p class="card-text"><span class="fw-bold">Sensors: </span>${phone.mainFeatures.sensors}</p>
                    <p class="card-text"><span class="fw-bold">Bluetooth: </span>${phone.others.Bluetooth}</p>
                    <p class="card-text"><span class="fw-bold">Other Features</p>
                    <p class="card-text"><span class="fw-bold">WLAN: </span>${phone.others.WLAN}</p>
                    <p class="card-text"><span class="fw-bold">GPS: </span>${phone.others.GPS}</p>
                    <p class="card-text"><span class="fw-bold">NFC: </span>${phone.others.NFC}</p>
                    <p class="card-text"><span class="fw-bold">Radio: </span>${phone.others.Radio}</p>
                    <p class="card-text"><span class="fw-bold">USB: </span>${phone.others.USB}</p>
                    </div>
                </div>
            </div>
        `
    }

    phoneDetails.appendChild(div)
}
