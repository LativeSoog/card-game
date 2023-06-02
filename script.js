import { renderDifficultyLevel } from "./components/renderDifficultyLevel.js";
import { selectDifficulty } from "./components/selectDifficultyGame.js";


const userInfoGame = {
    difficultyLevel: false,
}

renderDifficultyLevel({ userInfoGame })

selectDifficulty({ userInfoGame })

const startGameButton = document.querySelector(".button-start").addEventListener("click", () => {
    if (!userInfoGame.difficultyLevel) {
        alert("Пожалуйста, выберите сложность")
    } else {
        renderDifficultyLevel({ userInfoGame })
    }
})