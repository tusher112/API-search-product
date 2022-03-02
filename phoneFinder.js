const searchPhone = () => {
    const SearchField = document.getElementById('search-field');
    const searchText = SearchField.value;
    // console.log(searchText);
    SearchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top p-5" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <h5 class="card-title">Brand: ${phone.brand}</h5>
                        <button  type="button"
                        class="btn btn-outline-primary">More details</button>
                    </div>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

    });
}