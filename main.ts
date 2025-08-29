input.onButtonPressed(Button.A, function () {
    program += 1
    if (program > 7) {
        program = 1
    }
})
let lysstyrke = 0
let program = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGBW)
program = 1
basic.forever(function () {
    if (program == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (program == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (program == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (program == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (program == 5) {
        strip.showRainbow(1, 360)
    } else if (program == 6) {
        strip.showRainbow(1, 360)
        for (let index = 0; index < 30; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    } else if (program == 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        lysstyrke = 255
        for (let index = 0; index < 25; index++) {
            strip.setBrightness(lysstyrke)
            lysstyrke += -10
            basic.pause(10)
        }
        for (let index = 0; index < 25; index++) {
            strip.setBrightness(lysstyrke)
            lysstyrke += 10
            basic.pause(10)
        }
    }
})
