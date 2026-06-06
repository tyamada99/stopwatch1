let running = false
let startTime = 0
let elapsed = 0
let hundredth = 0
input.onButtonPressed(Button.A, function () {
    if (!(running)) {
        running = true
        startTime = control.millis()
        basic.showString("S")
    } else {
        running = false
        elapsed = control.millis() - startTime
        // 0.1秒単位で表示
        hundredth = Math.round(elapsed / 10) / 100
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(hundredth)
    }
})
input.onButtonPressed(Button.B, function () {
    running = false
    elapsed = 0
    basic.clearScreen()
})
basic.forever(function () {
    // アニメーションなしなので何もしない
    basic.pause(20)
})
