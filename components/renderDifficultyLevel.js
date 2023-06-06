const renderDifficultyLevel = ({ userInfoGame }) => {
    const selectDifficulty = document.getElementById("diff")


    if (!userInfoGame.difficultyLevel) {
        return selectDifficulty.innerHTML = `
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
    </form>`

    } else if (userInfoGame.difficultyLevel === "1") {
        return selectDifficulty.innerHTML = `
        <h1 class="content__title">Выбрана сложность 1</h1>`

    } else if (userInfoGame.difficultyLevel === "2") {
        return selectDifficulty.innerHTML = `
        <h1 class="content__title">Выбрана сложность 2</h1>`

    } else if (userInfoGame.difficultyLevel === "3") {
        return selectDifficulty.innerHTML = `
        <h1 class="content__title">Выбрана сложность 3</h1>`
    }

}

export { renderDifficultyLevel }