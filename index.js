const results = document.querySelector(".results")
const carColor = document.querySelector(".carColor")
const carMakes = document.querySelector(".carMakes")

let colorSelected = ''
let makeSelected = ''

function getSelectedColor() {
    return colorSelected = document.getElementById("colorList").value;
}
function getSelectedMake() {
    makeSelected = document.getElementById("listMake").value;
}

const btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    let carColor = colorSelected
    let carMake = makeSelected
    if (carColor.length != 0 && carMake.length != 0) {
        results.innerHTML='';
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carMake}/color/${carColor}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
                    results.appendChild(li);
                })
            });
    } else if (carColor.length != 0 && carMake.length == 0) {
        results.innerHTML='';
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${carColor}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
                    results.appendChild(li);
                })
            });
            
    } else if (carColor.length == 0 && carMake.length != 0) {
        results.innerHTML='';
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carMake}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
                    results.appendChild(li);
                })
            });

    } else if (carColor.length == 0 && carMake.length == 0) {
        results.innerHTML='';
        results.innerHTML='Nothing was selected'
    }

})



