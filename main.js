/**
 * Influence - Game design and development ideas
 *
 * PRIORITY
 *
 * TODO: add game board with 7x7 (areas of influence)
 * TODO: click to make square red / blue depending on which player's turn it is (simple version)
 * TODO: 1) click to select your own area, then 2) click a green or yellow square to expand your influence.
 * TODO: Clearly show if it's the red or blue player's turn using text in the top center of the screen.
 * TODO: When a zone is moved, try to conquer areas with the current player's influence
 * TODO: add player scores based on current number of areas
 * TODO: update player scores after each turn
 * TODO: add endgame conditions to determine the winner
 * TODO: make it possible to restart the game
 * TODO: add bonus area in the middle with higher score if you conquer it
 *
 *
 * FUTURE IDEAS (LOWER PRIO)
 *
 * TODO: Show bonus areas with a special indicator next to the player's turn.
 * TODO: Add animations to make the interactions feel super smooth!
 * TODO: count the number of turns each match takes to finish and display at the end
 */

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game()
    console.log(game)
})

class Game {
    constructor() {
        this.players = {
            red: new Player('red'),
            blue: new Player('blue'),
        }
        this.currentPlayer = 'blue'
        this.areas = []
        this.selectedArea = null

        this.initEventListeners()
    }

    nextTurn() {
        if (this.currentPlayer === 'blue') {
            this.currentPlayer = 'red'
        } else {
            this.currentPlayer = 'blue'
        }
    }

    initEventListeners() {
        Array.from(document.querySelectorAll('.area'))
            .map(div => new Area(div))
            .forEach((area) =>
                area.div.addEventListener('click', () => {
                    if (this.selectedArea) {
                        // determine if click happened in an area that should be conquerable
                    } else {
                        if (area.isOwnedByPlayer(this.currentPlayer)) {
                            // Select this area in game state
                            // add selected class
                            // add other classes to areas around it
                        }
                    }

                    // TODO: whenever a valid move was finished, call game.setNextTurn()
                }),
            )
    }
}

class Player {
    constructor(color) {
        this.color = color
        this.score = 2
        this.areas = []
    }
}

class Area {
    constructor(div) {
        this.div = div
    }

    isOwnedByPlayer(playerColor) {
        return this.div.classList.contains(playerColor)
    }
}
