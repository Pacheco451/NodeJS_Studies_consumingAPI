async function getContent(){
    try {
        const response = await fetch('http://localhost:60179/')
        const data = await response.json()
       show(data)
    } catch (error) {
        console.error(error)
    }
}



getContent()

function show(users) {
    let output = ''

    for( let user of users) {
        output += `<li>${user.name}</li>`
    }

    document.querySelector('body').innerHTML = output
}
