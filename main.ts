radio.onReceivedNumber(function (receivedNumber) {
    Mnm = receivedNumber
})
let Mnm = 0
radio.setGroup(1)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
basic.forever(function () {
    if (Mnm == 1) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (Mnm == 2) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    } else if (Mnm == 3) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    } else if (Mnm == 4) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
