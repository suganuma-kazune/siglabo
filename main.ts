input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    keyboard.sendString("b")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (ABボタン状態) {
        keyboard.sendString(keyboard.rawScancode(62))
        basic.showLeds(`
            # . # # #
            # # # . #
            . . . . .
            # . # . .
            # # # # #
            `)
        basic.clearScreen()
        ABボタン状態 = false
    } else {
        keyboard.sendString(keyboard.keys(keyboard._Key.escape))
        basic.showLeds(`
            # . . . #
            # # # # #
            . . . . .
            # . # . #
            # # # # #
            `)
        basic.clearScreen()
        ABボタン状態 = true
    }
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
    basic.pause(200)
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.alt) + "p")
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.shift) + keyboard.keys(keyboard._Key.tab))
})
let ABボタン状態 = false
keyboard.startKeyboardService()
led.setBrightness(60)
ABボタン状態 = true
basic.showLeds(`
    . . . . .
    # . . . #
    # . . . #
    # . . . #
    . . . . .
    `)
