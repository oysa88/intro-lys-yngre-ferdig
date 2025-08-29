function fargevalg () {
    if (fargenummer == 1) {
        farge = neopixel.colors(NeoPixelColors.Red)
        strip.showColor(farge)
    } else if (fargenummer == 2) {
        farge = neopixel.colors(NeoPixelColors.Orange)
        strip.showColor(farge)
    } else if (fargenummer == 3) {
        farge = neopixel.colors(NeoPixelColors.Yellow)
        strip.showColor(farge)
    } else if (fargenummer == 4) {
        farge = neopixel.colors(NeoPixelColors.Green)
        strip.showColor(farge)
    } else if (fargenummer == 5) {
        farge = neopixel.colors(NeoPixelColors.Blue)
        strip.showColor(farge)
    } else if (fargenummer == 6) {
        farge = neopixel.colors(NeoPixelColors.Indigo)
        strip.showColor(farge)
    } else if (fargenummer == 7) {
        farge = neopixel.colors(NeoPixelColors.Violet)
        strip.showColor(farge)
    } else if (fargenummer == 8) {
        farge = neopixel.colors(NeoPixelColors.Purple)
        strip.showColor(farge)
    } else if (fargenummer == 9) {
        farge = neopixel.colors(NeoPixelColors.White)
        strip.showColor(farge)
    } else if (fargenummer == 10) {
        for (let i = 0; i <= strip.length() - 1; i++) {
            hue = Math.idiv(360, strip.length()) * i
            regnbuefarge = neopixel.hsl(hue, 100, 30)
            farger.push(regnbuefarge)
            strip.setPixelColor(i, regnbuefarge)
        }
        strip.show()
    }
}
input.onButtonPressed(Button.A, function () {
    program += 1
    if (program > 4) {
        program = 1
    }
})
function plotProgram () {
    basic.clearScreen()
    if (fargenummer == 1) {
        led.plot(4, 1)
    } else if (fargenummer == 2) {
        led.plot(3, 1)
    } else if (fargenummer == 3) {
        led.plot(3, 1)
        led.plot(4, 1)
    } else if (fargenummer == 4) {
        led.plot(2, 1)
    } else if (fargenummer == 5) {
        led.plot(2, 1)
        led.plot(4, 1)
    } else if (fargenummer == 6) {
        led.plot(2, 1)
        led.plot(3, 1)
    } else if (fargenummer == 7) {
        led.plot(2, 1)
        led.plot(3, 1)
        led.plot(4, 1)
    } else if (fargenummer == 8) {
        led.plot(1, 1)
    } else if (fargenummer == 9) {
        led.plot(1, 1)
        led.plot(4, 1)
    } else if (fargenummer == 10) {
        // Lag regnbue og lagre fargene
        led.plot(1, 1)
        led.plot(3, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    fargenummer += 1
    if (fargenummer == 10) {
        regnbue = true
    } else {
        regnbue = false
    }
    if (fargenummer > 10) {
        fargenummer = 1
    }
})
let lysstyrke = 0
let teller = 0
let regnbue = false
let regnbuefarge = 0
let hue = 0
let farge = 0
let fargenummer = 0
let program = 0
let strip: neopixel.Strip = null
let farger: number[] = []
strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
program = 1
fargenummer = 1
basic.forever(function () {
    if (program == 1) {
        led.plot(4, 0)
        strip.setBrightness(255)
        fargevalg()
    } else if (program == 2) {
        led.plot(3, 0)
        strip.setBrightness(255)
        fargevalg()
        if (regnbue) {
            // Skru av ett og ett lys fra venstre mot høyre
            for (let j = 0; j <= strip.length(); j++) {
                strip.setPixelColor(j, neopixel.colors(NeoPixelColors.Black))
                strip.show()
                basic.pause(150)
            }
            for (let k = strip.length() - 1; k >= 0; k--) {
        strip.setPixelColor(k, farger[k])
        strip.show()
        basic.pause(150)
    }
        } else {
            for (let index = 0; index < strip.length(); index++) {
                strip.setPixelColor(teller, neopixel.colors(NeoPixelColors.Black))
                strip.show()
                teller += 1
                basic.pause(100)
            }
            for (let index = 0; index < strip.length() + 1; index++) {
                strip.setPixelColor(teller, farge)
                strip.show()
                teller += -1
                basic.pause(100)
            }
        }
    } else if (program == 3) {
        led.plot(3, 0)
        led.plot(4, 0)
        fargevalg()
        lysstyrke = 0
        if (regnbue) {
            for (let index = 0; index < 25; index++) {
                strip.setBrightness(lysstyrke)
                strip.showRainbow(1, 360)
                lysstyrke += 10
                basic.pause(50)
            }
            for (let index = 0; index < 25; index++) {
                strip.setBrightness(lysstyrke)
                strip.showRainbow(1, 360)
                lysstyrke += -10
                basic.pause(50)
            }
        } else {
            for (let index = 0; index < 25; index++) {
                strip.setBrightness(lysstyrke)
                strip.showColor(farge)
                lysstyrke += 10
                basic.pause(50)
            }
            for (let index = 0; index < 25; index++) {
                strip.setBrightness(lysstyrke)
                strip.showColor(farge)
                lysstyrke += -10
                basic.pause(50)
            }
        }
    } else if (program == 4) {
        led.plot(2, 0)
        strip.setBrightness(255)
        strip.showRainbow(1, 360)
        for (let index = 0; index < strip.length(); index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    }
    plotProgram()
})
