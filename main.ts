input.onButtonPressed(Button.A, function () {
    for (let n = 0; n <= 4; n++) {
        for (let index = 0; index <= 4; index++) {
            basic.pause(1000)
            led.toggle(index, 0)
        }
        for (let index = 0; index <= 4; index++) {
            basic.pause(1000)
            led.toggle(index, 0)
        }
        led.toggle(n, 1)
    }
})
basic.forever(function () {
	
})
