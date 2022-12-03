// GET, POST, PUT, PATCH, DELETE

let btn = document.getElementById('submit')

btn.addEventListener('click', async () => {
    const username = document.getElementById('input').value
    let response = await fetch(`http://localhost:8080/data/${username}`)
    let data = await response.json()

    document.getElementById('input').value = ''

    let header = document.createElement('h1')
    header.id = 'name'
    header.textContent = data.login
    document.body.appendChild(header)

    let image = document.createElement('img')
    image.id = 'profile-pic'
    image.src = data.avatar_url
    image.alt ='profile pic'

    document.body.appendChild(image)
})

let clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    let header = document.getElementById('name')
    let image = document.getElementById('profile-pic')

    if (header) {
        header.remove()
    }
    if (image) {
        image.remove()
    }
})

// http://localhost:8080/people -> array of people (string)
async function getPeople() {
    const response = await fetch('http://localhost:8080/people')
    const data = await response.json() //{ payLoad: [brad, john, hannah] }
    
    const list = document.getElementById('people-list')
    data.payload.forEach(person => {
        const listItem = document.createElement('li')
        listItem.textContent = person
        list.appendChild(listItem)
    })
}

// POST: http://localhost:8080/people/add -> { payload: string }
async function addPerson() {
    const name = document.getElementById('person-input').value

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })
    }
    
    const response = await fetch('http://localhost:8080/people/add', options)
    const data = await response.json()

    const list = document.getElementById('people-list')
    const listItem = document.createElement('li')
    listItem.textContent = data.payload
    list.appendChild(listItem)
}

const submitBtn = document.getElementById('submit-person')
submitBtn.addEventListener('click', addPerson)


getPeople()