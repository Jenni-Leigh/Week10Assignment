//This is where I created my submit button

const formButton = document.getElementById('formSubmit')



let number = 0

//this is where I added an event listener, so when I click submit the value will go from the form to the table

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    //variables to hold the value of the form
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let favoriteColor = document.getElementById('favoriteColor').value



//this is where I create a tr node to append to my form

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteColorNode = document.createElement('td')
    favoriteColorNode.innerHTML = favoriteColor
    newTableRow.append(favoriteColorNode)

    document.getElementById('tBody').appendChild(newTableRow)

//this is how I set it up to clear the form once the submit button has been pressed

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

number++
    
})