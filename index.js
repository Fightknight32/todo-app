const btn = document.getElementById('button')
const pp = document.getElementById('something')

btn.addEventListener("click", () => {
    console.log(input.value)
    if (input.value != 0) {
        list.innerHTML += ` <div class="card mt-1 p-2 flex-row">
                            <p class="col-10">${input.value}</p>
                            <button onclick="this.parentElement.style.display = 'none';" class="btn btn-close ms-auto"></button>
                            </div>`
    input.value = "";

    }
})

