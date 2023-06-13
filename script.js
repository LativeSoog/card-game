import './style/style.css'
import { renderDifficultyLevel } from './components/renderDifficultyLevel.js'

const userInfoGame = {
    difficultyLevel: false,
    quantityOfCards: 0,
}

renderDifficultyLevel({ userInfoGame })
