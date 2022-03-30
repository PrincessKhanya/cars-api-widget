//const { links } = require("express/lib/response");

//console.log(axios)
const contacts = document.querySelector(".contacts")
const carColor = document.querySelector(".carColor")
const carMakes = document.querySelector(".carMakes")



// axios
//     .get("https://api-tutor.herokuapp.com/v1/cars")
//     .then(function (response) {
//         //console.log(response.data)
//         response.data.forEach(user => {
//             const li = document.createElement('tr')
//             li.innerHTML = `
//             </tr>
//                 <td>${user.make}</td> 
//                 <td>${user.model}</td>
//                 <td>${user.color}</td>
//                 <td>${user.price}</td>
//                 <td>${user.reg_number}</td>
//             </tr>`
//             contacts.appendChild(li);
//         })
//     });

// axios
//     .get("https://api-tutor.herokuapp.com/v1/colors")
//     .then(function (response) {
//         //console.log(response.data)
//         response.data.forEach(user => {
//             const li = document.createElement('tr')
//             li.innerHTML = `
//             </tr>
//                 <td>${user}</td> 
//             </tr>`
//             carColor.appendChild(li);

//         })

//     });

//     axios
//     .get("https://api-tutor.herokuapp.com/v1/makes")
//     .then(function (response) {
//         //console.log(response.data)
//         response.data.forEach(user => {
//             const li = document.createElement('tr')
//             li.innerHTML = `
//             </tr>
//                 <td>${user}</td> 
//             </tr>`
//             carMakes.appendChild(li);

//         })

//     });

// async function getData() {
//     const response = await axios.get("https:jsonplaceholder.typicode.com/users")
//     response.data.forEach(user => {
//         const li = document.createElement('tr')
//         li.innerHTML = `
//                     </tr>
//                         <td>${user.name}</td>
//                         <td>${user.username}</td>
//                         <td>${user.email}</td></td>
//                     </tr>`
//         contacts.appendChild(li);

//     })
// }

// getData();


const wrapper = document.querySelector(".wrapper")
function clickedColor(sentence) {
    let displayCarColor=sentence.target.innerHTML
    console.log(displayCarColor)
    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/color/${displayCarColor}`)
    .then(function (response) {
        console.log(response.data)
        response.data.forEach(user => {
            const li = document.createElement('tr')
            li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
            carMakes.appendChild(li);
        })
    });
    return displayCarColor
}

const ul = document.querySelector(".dropdown");
wrapper.addEventListener('click', clickedColor)

const wrappers = document.querySelector(".wrappers")
function clickedMake(sentence) {
    let displayCarMake=sentence.target.innerHTML
    console.log(displayCarMake)
    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/make/${displayCarMake}`)
    .then(function (response) {
        console.log(response.data)
        response.data.forEach(user => {
            const li = document.createElement('tr')
            li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
            carColor.appendChild(li);
        })
    });
    return displayCarMake
}

const uls = document.querySelector(".dropdowns");
wrappers.addEventListener('click', clickedMake)

    // let displayCarColor=displayCarColor
    // console.log(displayCarColor)
    // let displayCarMake=displayCarMake
    // console.log(displayCarMake)

    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/make/toyota/color/blue`)
    .then(function (response) {
        console.log(response.data)
        response.data.forEach(user => {
            const li = document.createElement('tr')
            li.innerHTML = `
            </tr>
                <td>${JSON.stringify(user)}</td> 
            </tr>`
            contacts.appendChild(li);
        })
    });
    
