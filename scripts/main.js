const lowercase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

const lowercaseBtn = document.getElementById('lowercase')
const uppercaseBtn = document.getElementById('uppercase')
const numbersBtn = document.getElementById('numbers')
const specialBtn = document.getElementById('special')

const passwordBtn = document.getElementById('password-button')
const passwordLength = document.getElementById('password-length')
const passwordOutput = document.getElementById('password-output')

const btnArray = [lowercaseBtn, uppercaseBtn, numbersBtn, specialBtn]
const charArray = [lowercase, uppercase, numbers, special]

passwordBtn.addEventListener('click', generatePassword)
function getCharArray()
{
    let emptyArray = []
    for (let i = 0; i < btnArray.length; i++)
    {
        if (btnArray[i].checked === true)
        {
            emptyArray.push(charArray[i])
        }
    }
    // alert(emptyArray)
    return emptyArray
}


function generatePassword()
{
    let characters = getCharArray().flat()
    let password = ''
    for (let i = 0; i < passwordLength.value; i++)
    {
        let randomChar = getRandomInt(0, characters.length - 1)
        password += characters[randomChar]
    }
    passwordOutput.innerHTML = password
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }