radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 9) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(20)
basic.forever(function () {
	
})
