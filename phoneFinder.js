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
    searchResult.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col col-sm-12 ">
                <div class="card h-100 ">
                    <img src="${phone.image}" class="card-img-top p-5" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <h5 class="card-title">Brand: ${phone.brand}</h5>
                        <button onclick="loadPhoneDetail('${phone.slug}')" type="button"
                        class="btn btn-outline-primary">More details </button>
                    </div>
                </div>
            </div>
        `;
        searchResult.appendChild(div);

    });
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayPhoneDetails(data.data));

}

const DisplayPhoneDetails = phone => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
                    <img src="${phone.image}" class="card-img-top p-5" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${phone.name}</h5>
                        <h5 class="card-title">Brand: ${phone.brand}</h5>
                        <h6 class="card-title">Release Date: ${phone.releaseDate}</h6>
                        <h6 class="card-title">ChipSet: ${phone.mainFeatures.chipSet}</h6>
                        <h6 class="card-title">Size: ${phone.mainFeatures.displaySize}</h6>
                        <h6 class="card-title">Memory: ${phone.mainFeatures.memory}</h6>
                        <h6 class="card-title">Storage: ${phone.mainFeatures.storage}</h6>
                        <button  type="button"
                        class="btn btn-outline-primary">More details</button>
                    </div>
                </div>
            </div>
        `;
    phoneDetails.appendChild(div);

}