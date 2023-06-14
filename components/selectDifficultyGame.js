const functionSelectDifficulty = ({ userInfoGame }) => {
    const difficultyEasy = document.getElementById('diff-easy')
    const difficultyMiddle = document.getElementById('diff-middle')
    const difficultyHard = document.getElementById('diff-hard')

    difficultyEasy.addEventListener('click', () => {
        userInfoGame.difficultyLevel = difficultyEasy.value
        userInfoGame.quantityOfCards = 6
    })

    difficultyMiddle.addEventListener('click', () => {
        userInfoGame.difficultyLevel = difficultyMiddle.value
        userInfoGame.quantityOfCards = 12
    })

    difficultyHard.addEventListener('click', () => {
        userInfoGame.difficultyLevel = difficultyHard.value
        userInfoGame.quantityOfCards = 18
    })
}

export { functionSelectDifficulty }
