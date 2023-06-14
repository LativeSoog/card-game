import { renderDifficultyLevel } from './renderDifficultyLevel.js'

const finalGame = ({ userInfoGame }) => {
    const gameField = document.querySelector('.field')
    const gameFieldHtml = gameField.innerHTML
    if (userInfoGame.winLastGame === false) {
        gameField.innerHTML =
            gameFieldHtml +
            `<section class="final-game">
        <div class="content content__final">
            <div class="content__final-image">
                <img src="./img/final-loss.png" />
            </div>
            <h1 class="content__title content__final-title">
                Вы проиграли!
            </h1>
            <div class="content__final-time">
                <p class="content__final-time-text">Затраченное время:</p>
                <p class="content__final-time-numbers">${userInfoGame.timeLastGame}</p>
            </div>
            <div class="content__button content__final-button">
                <button id="newGames" class="button-start">Играть снова</button>
            </div>
        </div>
    </section>`
    } else if (userInfoGame.winLastGame === true) {
        gameField.innerHTML =
            gameFieldHtml +
            `<section class="final-game">
    <div class="content content__final">
        <div class="content__final-image">
            <img src="./img/final-win.png" />
        </div>
        <h1 class="content__title content__final-title">
            Вы выиграли!
        </h1>
        <div class="content__final-time">
            <p class="content__final-time-text">Затраченное время:</p>
            <p class="content__final-time-numbers">${userInfoGame.timeLastGame}</p>
        </div>
        <div class="content__button content__final-button">
            <button id="newGames" class="button-start">Играть снова</button>
        </div>
    </div>
</section>`
    }

    // eslint-disable-next-line no-unused-vars
    const newGames = document
        .getElementById('newGames')
        .addEventListener('click', () => {
            userInfoGame.difficultyLevel = false
            renderDifficultyLevel()
        })
}
export { finalGame }
