import { generateCards } from './generateGameCards.js'
import { functionSelectDifficulty } from './selectDifficultyGame.js'

const renderDifficultyLevel = ({ userInfoGame }) => {
    const selectDifficulty = document.getElementById('diff')

    if (!userInfoGame.difficultyLevel) {
        selectDifficulty.innerHTML = `
    <div class="content">
     <h1 class="content__title">Выбери<br>сложность</h1>
        <form action="#">
          <div class="content__diff-lvl">
            <div class="diff-lvl__button">
                <input type="radio" name="difficulty" id="diff-easy" value="1">
                <label for="diff-easy">1</label>
            </div>
            <div class="diff-lvl__button">
                <input type="radio" name="difficulty" id="diff-middle" value="2">
                <label for="diff-middle">2</label>
            </div>
            <div class="diff-lvl__button">
                <input type="radio" name="difficulty" id="diff-hard" value="3">
                <label for="diff-hard">3</label>
            </div>
         </div>
         <div class="content__button">
            <button class="button-start">Старт</button>
         </div>
        </form>
    </div>`

        functionSelectDifficulty({ userInfoGame })
        // eslint-disable-next-line no-unused-vars
        const startGameButton = document
            .querySelector('.button-start')
            .addEventListener('click', () => {
                if (!userInfoGame.difficultyLevel) {
                    alert('Пожалуйста, выберите сложность')
                } else {
                    renderDifficultyLevel({ userInfoGame })
                }
            })
    } else if (userInfoGame.difficultyLevel === '1') {
        generateCards({ userInfoGame, selectDifficulty })
    } else if (userInfoGame.difficultyLevel === '2') {
        generateCards({ userInfoGame, selectDifficulty })
    } else if (userInfoGame.difficultyLevel === '3') {
        generateCards({ userInfoGame, selectDifficulty })
    }
}

export { renderDifficultyLevel }
