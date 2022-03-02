const searchPhone = () => {
    const SearchField = document.getElementById('search-field');
    const searchText = SearchField.value;
    console.log(searchText);
    SearchField.value = '';
}