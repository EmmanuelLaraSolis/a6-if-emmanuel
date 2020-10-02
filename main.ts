basic.showString("Belly ")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                # . . . .
                . # # # #
                . # # # .
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                . # # # #
                . # # # .
                # . . # .
                `)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # .
                . # # # .
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # .
                . # # # .
                . # . . #
                `)
        }
    }
    if (input.isGesture(Gesture.LogoUp)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # .
                . # # # .
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # # # .
                . # # # .
                # . . . #
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . #
                # # # # .
                . # # # .
                . # . # .
                `)
            basic.pause(100)
        }
    }
})
