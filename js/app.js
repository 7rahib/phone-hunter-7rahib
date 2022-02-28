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
    })
}