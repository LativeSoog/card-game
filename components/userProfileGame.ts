type userInfo = {
    difficultyLevel: boolean | string
    quantityOfCards: number
    oneOpenCard?: {
        value?: string
    }
    twoOpenCard?: {
        value?: string
    }
    winLastGame: boolean
    timeLastGame: string
}

const userInfoGame: userInfo = {
    difficultyLevel: false,
    quantityOfCards: 0,
    oneOpenCard: {
        value: '',
    },
    twoOpenCard: {
        value: '',
    },
    winLastGame: false,
    timeLastGame: '00.00',
}

export { userInfoGame }
