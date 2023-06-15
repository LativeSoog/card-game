import { finalGame } from './renderFinalGame'
import { userInfoGame } from './userProfileGame'

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
            const htmlCard = card as HTMLElement
            htmlCard.setAttribute('src', `./img/${htmlCard.dataset.value}.jpg`)
            htmlCard.dataset.open = 'open'
            if (!userInfoGame?.oneOpenCard?.value) {
                userInfoGame.oneOpenCard!.value = htmlCard.dataset.value
            } else {
                userInfoGame.twoOpenCard!.value = htmlCard.dataset.value
                comparisonCard()
            }
        })
    })

    const comparisonCard = () => {
        if (
            userInfoGame.oneOpenCard?.value === userInfoGame.twoOpenCard?.value
        ) {
            userInfoGame.oneOpenCard!.value = ''
            checkWin()
        } else {
            userInfoGame.winLastGame = false
            userInfoGame.timeLastGame = minute.innerHTML + second.innerHTML
            finalGame({ userInfoGame })
        }
    }

    const checkWin = () => {
        const cards: HTMLElement[] = Array.from(
            document.querySelectorAll('.item__image')
        )
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
