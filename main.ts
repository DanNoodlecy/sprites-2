input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        turtle.move(1)
        turtle.ifOnEdgeBounce()
        seal.move(1)
        seal.ifOnEdgeBounce()
        lobster1.move(1)
        lobster1.ifOnEdgeBounce()
        lobster2.move(1)
        lobster2.ifOnEdgeBounce()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turn(Direction.Left, 45)
    lobster2.turn(Direction.Left, 45)
    lobster1.turn(Direction.Right, 45)
    seal.turn(Direction.Right, 45)
    for (let index = 0; index < 8; index++) {
        turtle.move(1)
        turtle.ifOnEdgeBounce()
        lobster2.move(1)
        lobster2.ifOnEdgeBounce()
        lobster1.move(1)
        lobster1.ifOnEdgeBounce()
        seal.move(1)
        seal.ifOnEdgeBounce()
        basic.pause(500)
    }
})
let lobster2: game.LedSprite = null
let lobster1: game.LedSprite = null
let seal: game.LedSprite = null
let turtle: game.LedSprite = null
turtle = game.createSprite(0, 1)
seal = game.createSprite(0, 3)
lobster1 = game.createSprite(4, 1)
lobster1.turn(Direction.Right, 180)
lobster2 = game.createSprite(4, 3)
lobster2.turn(Direction.Right, 180)
basic.forever(function () {
	
})
