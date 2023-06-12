const renderDifficultyLevel = ({ userInfoGame }) => {
    const selectDifficulty = document.getElementById('diff')

    if (!userInfoGame.difficultyLevel) {
        return (selectDifficulty.innerHTML = `
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
    </div>`)
    } else if (userInfoGame.difficultyLevel === '1') {
        return (selectDifficulty.innerHTML = `
        <div class="field">
        <div class="field__header">
            <div class="field__time">
                <p class="field__time-min">00.</p>
                <p class="field__time-sec">00</p>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <div class="field__item">
            <img src="/../img/ace-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/king-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/queen-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/jack-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/10-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/9-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/8-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/7-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/6-spades.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/ace-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/king-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/queen-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/jack-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/10-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/9-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/8-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/7-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/6-hearts.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/ace-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/king-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/queen-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/jack-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/10-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/9-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/8-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/7-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/6-diamonds.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/ace-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/king-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/queen-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/jack-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/10-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/9-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/8-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/7-clubs.jpg" />
        </div>
        <div class="field__item">
            <img src="./img/6-clubs.jpg" />
        </div>
    </div>`)
    } else if (userInfoGame.difficultyLevel === '2') {
        return (selectDifficulty.innerHTML = `
        <h1 class="content__title">Выбрана сложность 2</h1>`)
    } else if (userInfoGame.difficultyLevel === '3') {
        return (selectDifficulty.innerHTML = `
        <h1 class="content__title">Выбрана сложность 3</h1>`)
    }
}

export { renderDifficultyLevel }
