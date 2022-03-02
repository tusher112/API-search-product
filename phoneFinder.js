const searchPhone = () => {
    const SearchField = document.getElementById('search-field');
    const searchText = SearchField.value;
    console.log(searchText);
    SearchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = phones => {
    console.log(phones);
}