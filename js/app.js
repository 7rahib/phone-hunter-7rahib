const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = datas => {
    const searchResult = document.getElementById('search-result');
    datas.forEach(data => {
        console.log(data);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <h5 class="card-title">${data.phone_name}</h5>
        </div>
        <div class="card-footer">
        <button class="btn btn-primary" type="button" id="button-search">Details</button>
        </div>
         </div>
        `;
        searchResult.appendChild(div);
    })
}