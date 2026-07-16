serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    serial.writeValue("y", pins.analogReadPin(AnalogReadWritePin.P1))
    basic.pause(1000)
})
