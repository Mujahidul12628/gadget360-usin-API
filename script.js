const loadPhone = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`

    const response = await fetch(url);
    const mobileInfo = await response.json();
    displayPhone(mobileInfo.data);

}
const displayPhone = (phones) => {
    console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    console.log(phoneContainer)

    for (const phone of phones) {
        const singlePhone = document.createElement('div');
        singlePhone.classList.add('col');
        singlePhone.innerHTML = `
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top img-fluid w-75 py-3 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
        `

        phoneContainer.appendChild(singlePhone);
    }

}

loadPhone();