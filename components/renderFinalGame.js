const finalGame = () => {
    const gameField = document.querySelector('.field')
    const gameFieldHtml = gameField.innerHTML
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
                <p class="content__final-time-numbers">01.20</p>
            </div>
            <div class="content__button content__final-button">
                <button class="button-start">Играть снова</button>
            </div>
        </div>
    </section>`
}
export { finalGame }
