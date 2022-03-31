const contacts = document.querySelector(".contacts")
const carColor = document.querySelector(".carColor")
const carMakes = document.querySelector(".carMakes")

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
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
            contacts.appendChild(li);
        })
    });

axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (response) {
        response.data.forEach(user => {
            const li = document.createElement('tr')
            li.innerHTML = `
            </tr>
                <td>${user}</td> 
            </tr>`
            carColor.appendChild(li);

        })

    });

    axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (response) {
        //console.log(response.data)
        response.data.forEach(user => {
            const li = document.createElement('tr')
            li.innerHTML = `
            </tr>
                <td>${user}</td> 
            </tr>`
            carMakes.appendChild(li);

        })

    });

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
