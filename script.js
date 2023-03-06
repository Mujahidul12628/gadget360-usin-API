const loadPhone = async (searchData, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchData}`

    const response = await fetch(url);
    const mobileInfo = await response.json();
    displayPhone(mobileInfo.data, dataLimit);

}
const displayPhone = (phones, dataLimit) => {
    console.log(phones);

    const phoneContainer = document.getElementById('phone-container');

    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        const showAll = document.getElementById('showAll');
        showAll.classList.remove('d-none')
    }
    else {
        const showAll = document.getElementById('showAll');
        showAll.classList.add('d-none')
    }

    const noDataFound = document.getElementById('no-data-found')

    if (phones.length <= 0) {
        noDataFound.classList.remove('d-none')
    }
    else {
        noDataFound.classList.add('d-none')
    }

    phoneContainer.innerText = ''

    console.log(phoneContainer)

    for (const phone of phones) {
        const singlePhone = document.createElement('div');
        singlePhone.classList.add('col', 'mb-5');
        singlePhone.innerHTML = `
                <div class="card h-100 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <img src="${phone.image}" class="card-img-top img-fluid w-75 py-3 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
        `

        phoneContainer.appendChild(singlePhone);
    }
    loadSpinner(false);

}

const processSearch = (dataLimit) => {
    loadSpinner(true);
    const searchInput = document.getElementById('searchInput');
    const searchData = searchInput.value;
    loadPhone(searchData, dataLimit);
}

document.getElementById('searchBtn').addEventListener('click', function () {
    processSearch(10);
})

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    console.log(event.key)
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        processSearch(10);
    }
});

const loadSpinner = (isLoading) => {
    const spinner = document.getElementById('spinner');

    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}

document.getElementById('showAll').addEventListener('click', function () {
    processSearch();
})

