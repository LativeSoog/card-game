const selectDifficulty = ({ userInfoGame }) => {
    const difficultyEasy = document.getElementById("diff-easy");
    const difficultyMiddle = document.getElementById("diff-middle");
    const difficultyHard = document.getElementById("diff-hard");

    difficultyEasy.addEventListener("click", () => {
        userInfoGame.difficultyLevel = difficultyEasy.value;
    })

    difficultyMiddle.addEventListener("click", () => {
        userInfoGame.difficultyLevel = difficultyMiddle.value;
    })

    difficultyHard.addEventListener("click", () => {
        userInfoGame.difficultyLevel = difficultyHard.value
    })
}

export { selectDifficulty }