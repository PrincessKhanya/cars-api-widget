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
        results.innerHTML = '';
        const th = document.createElement('tr')
        th.innerHTML = `
                    </tr>
                        <th>make</th> 
                        <th>model</th>
                        <th>color</th>
                        <th>price</th>
                        <th>reg_number</th>
                    </tr>`
        results.appendChild(th);
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carMake}/color/${carColor}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
                    </tr>
                        <td>${user.make}</td> 
                        <td>${user.model}</td>
                        <td>${user.color}</td>
                        <td>${user.price}</td>
                        <td>${user.reg_number}</td>
                    </tr>`
                    results.appendChild(li);
                })
            });
    } else if (carColor.length != 0 && carMake.length == 0) {
        results.innerHTML = '';
        const th = document.createElement('tr')
        th.innerHTML = `
                    </tr>
                        <th>make</th> 
                        <th>model</th>
                        <th>color</th>
                        <th>price</th>
                        <th>reg_number</th>
                    </tr>`
        results.appendChild(th);
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${carColor}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
                    </tr>
                        <td>${user.make}</td> 
                        <td>${user.model}</td>
                        <td>${user.color}</td>
                        <td>${user.price}</td>
                        <td>${user.reg_number}</td>
                    </tr>`
                    results.appendChild(li);
                })
            });

    } else if (carColor.length == 0 && carMake.length != 0) {
        results.innerHTML = '';
        const th = document.createElement('tr')
        th.innerHTML = `
                    </tr>
                        <th>make</th> 
                        <th>model</th>
                        <th>color</th>
                        <th>price</th>
                        <th>reg_number</th>
                    </tr>`
        results.appendChild(th);
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carMake}`)
            .then(function (response) {
                response.data.forEach(user => {
                    const li = document.createElement('tr')
                    li.innerHTML = `
                    </tr>
                        <td>${user.make}</td> 
                        <td>${user.model}</td>
                        <td>${user.color}</td>
                        <td>${user.price}</td>
                        <td>${user.reg_number}</td>
                    </tr>`
                    results.appendChild(li);
                })
            });

    } else if (carColor.length == 0 && carMake.length == 0) {
        results.innerHTML = '';
        results.innerHTML = '<h5>Nothing was selected</h5>'
    }

})



