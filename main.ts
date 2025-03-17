input.onGesture(Gesture.Shake, function () {
    contador += 1
})
let contador = 0
basic.forever(function () {
    basic.showNumber(contador)
})
