import { finalGame } from './renderFinalGame.js'
import { userInfoGame } from './userProfileGame.js'

// let oneOpenCard = {
//     value: '',
// }
// let twoOpenCard = {
//     value: '',
// }

const mechanicsGame = ({ minute, second }) => {
    const cards = document.querySelectorAll('.item__image')
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.setAttribute('src', `./img/${card.dataset.value}.jpg`)
            card.dataset.open = 'open'
            if (!userInfoGame.oneOpenCard.value) {
                userInfoGame.oneOpenCard.value = card.dataset.value
            } else {
                userInfoGame.twoOpenCard.value = card.dataset.value
                comparisonCard()
            }
        })
    })

    const comparisonCard = () => {
        if (userInfoGame.oneOpenCard.value === userInfoGame.twoOpenCard.value) {
            userInfoGame.oneOpenCard.value = ''
            checkWin()
        } else {
            userInfoGame.winLastGame = false
            userInfoGame.timeLastGame = minute.innerHTML + second.innerHTML
            finalGame({ userInfoGame })
        }
    }

    const checkWin = () => {
        const cards = document.querySelectorAll('.item__image')
        for (let card of cards) {
            if (card.dataset.open !== 'open') {
                return false
            }
        }
        userInfoGame.winLastGame = true
        userInfoGame.timeLastGame = minute.innerHTML + second.innerHTML
        finalGame({ userInfoGame })
    }
}

export { mechanicsGame }
