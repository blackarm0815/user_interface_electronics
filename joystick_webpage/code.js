"use strict";
const resizeDivs = () => {
    const scaleHeight = window.innerHeight / 22;
    const scaleWidth = window.innerWidth / 22;
    let scale = scaleWidth;
    if (scaleHeight < scaleWidth) {
        scale = scaleHeight;
    }
    // background
    const backgroundHeight = scale * 22;
    const backgroundLeft = Math.floor((window.innerWidth - (scale * 22)) / 2);
    const backgroundTop = 0;
    const backgroundWidth = scale * 22;
    const divBackground = document.getElementById('background');
    if (divBackground !== null) {
        divBackground.style.height = `${backgroundHeight}px`;
        divBackground.style.left = `${backgroundLeft}px`;
        divBackground.style.top = `${backgroundTop}px`;
        divBackground.style.width = `${backgroundWidth}px`;
    }
    // joystick
    const joystickHeight = scale * 15;
    const joystickLeft = backgroundLeft + scale;
    const joystickTop = backgroundTop + (scale * 6);
    const joystickWidth = scale * 15;
    const divJoystick = document.getElementById('joystick');
    if (divJoystick !== null) {
        divJoystick.style.height = `${joystickHeight}px`;
        divJoystick.style.left = `${joystickLeft}px`;
        divJoystick.style.top = `${joystickTop}px`;
        divJoystick.style.width = `${joystickWidth}px`;
    }
    // lever
    const leverHeight = scale * 15;
    const leverLeft = backgroundLeft + (scale * 17);
    const leverTop = backgroundTop + (scale * 6);
    const leverWidth = scale * 4;
    const divLever = document.getElementById('lever');
    if (divLever !== null) {
        divLever.style.height = `${leverHeight}px`;
        divLever.style.left = `${leverLeft}px`;
        divLever.style.top = `${leverTop}px`;
        divLever.style.width = `${leverWidth}px`;
    }
    // output general
    const outputFontSize = Math.floor(scale * 1.8);
    const outputPaddingTop = Math.floor(scale * 1.30);
    // output0
    const output0Height = scale * 4;
    const output0Left = backgroundLeft + scale;
    const output0Top = backgroundTop + scale;
    const output0Width = scale * 6;
    const divOutput0 = document.getElementById('output0');
    if (divOutput0 !== null) {
        divOutput0.style.fontSize = `${outputFontSize}px`;
        divOutput0.style.height = `${output0Height}px`;
        divOutput0.style.left = `${output0Left}px`;
        divOutput0.style.paddingTop = `${outputPaddingTop}px`;
        divOutput0.style.top = `${output0Top}px`;
        divOutput0.style.width = `${output0Width}px`;
    }
    // output1
    const output1Height = scale * 4;
    const output1Left = backgroundLeft + (scale * 8);
    const output1Top = backgroundTop + scale;
    const output1Width = scale * 6;
    const divOutput1 = document.getElementById('output1');
    if (divOutput1 !== null) {
        divOutput1.style.fontSize = `${outputFontSize}px`;
        divOutput1.style.height = `${output1Height}px`;
        divOutput1.style.left = `${output1Left}px`;
        divOutput1.style.paddingTop = `${outputPaddingTop}px`;
        divOutput1.style.top = `${output1Top}px`;
        divOutput1.style.width = `${output1Width}px`;
    }
    // output2
    const output2Height = scale * 4;
    const output2Left = backgroundLeft + (scale * 15);
    const output2Top = backgroundTop + scale;
    const output2Width = scale * 6;
    const divOutput2 = document.getElementById('output2');
    if (divOutput2 !== null) {
        divOutput2.style.fontSize = `${outputFontSize}px`;
        divOutput2.style.height = `${output2Height}px`;
        divOutput2.style.left = `${output2Left}px`;
        divOutput2.style.paddingTop = `${outputPaddingTop}px`;
        divOutput2.style.top = `${output2Top}px`;
        divOutput2.style.width = `${output2Width}px`;
    }
};
const main = () => {
    window.addEventListener('resize', resizeDivs);
    resizeDivs();
};
main();
