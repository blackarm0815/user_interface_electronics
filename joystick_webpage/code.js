"use strict";
const resizeDivs = () => {
    const scaleHeight = window.innerHeight / 19;
    const scaleWidth = window.innerWidth / 44;
    let scale = scaleWidth;
    if (scaleHeight < scaleWidth) {
        scale = scaleHeight;
    }
    // background
    const backgroundHeight = scale * 19;
    const backgroundLeft = Math.floor((window.innerWidth - (scale * 44)) / 2);
    const backgroundTop = 0;
    const backgroundWidth = scale * 42;
    const divBackground = document.getElementById('background');
    if (divBackground !== null) {
        divBackground.style.height = `${backgroundHeight}px`;
        divBackground.style.left = `${backgroundLeft}px`;
        divBackground.style.top = `${backgroundTop}px`;
        divBackground.style.width = `${backgroundWidth}px`;
    }
    // joystick0
    const joystick0Height = scale * 15;
    const joystick0Left = backgroundLeft + (scale * 2);
    const joystick0Top = backgroundTop + (scale * 2);
    const joystick0Width = scale * 15;
    const divJoystick = document.getElementById('joystick0');
    if (divJoystick !== null) {
        divJoystick.style.height = `${joystick0Height}px`;
        divJoystick.style.left = `${joystick0Left}px`;
        divJoystick.style.top = `${joystick0Top}px`;
        divJoystick.style.width = `${joystick0Width}px`;
    }
    // joystick1
    const joystick1Height = scale * 15;
    const joystick1Left = backgroundLeft + (scale * 27);
    const joystick1Top = backgroundTop + (scale * 2);
    const joystick1Width = scale * 15;
    const divLever = document.getElementById('joystick1');
    if (divLever !== null) {
        divLever.style.height = `${joystick1Height}px`;
        divLever.style.left = `${joystick1Left}px`;
        divLever.style.top = `${joystick1Top}px`;
        divLever.style.width = `${joystick1Width}px`;
    }
    // output general
    const outputFontSize = Math.floor(scale * 1.6);
    const outputPaddingTop = Math.floor(scale * 0.7);
    // output0
    const output0Height = scale * 3;
    const output0Left = backgroundLeft + (scale * 19);
    const output0Top = (scale * 2);
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
    const output1Height = scale * 3;
    const output1Left = backgroundLeft + (scale * 19);
    const output1Top = (scale * 6);
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
    const output2Height = scale * 3;
    const output2Left = backgroundLeft + (scale * 19);
    const output2Top = (scale * 10);
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
    // output3
    const output3Height = scale * 3;
    const output3Left = backgroundLeft + (scale * 19);
    const output3Top = (scale * 14);
    const output3Width = scale * 6;
    const divOutput3 = document.getElementById('output3');
    if (divOutput3 !== null) {
        divOutput3.style.fontSize = `${outputFontSize}px`;
        divOutput3.style.height = `${output3Height}px`;
        divOutput3.style.left = `${output3Left}px`;
        divOutput3.style.paddingTop = `${outputPaddingTop}px`;
        divOutput3.style.top = `${output3Top}px`;
        divOutput3.style.width = `${output3Width}px`;
    }
};
const checkJoystick0 = (touch) => {
    const joystick0 = document.getElementById('joystick0');
    const output0 = document.getElementById('output0');
    const output1 = document.getElementById('output1');
    if (joystick0 !== null && output0 !== null && output1 !== null) {
        const joystick0Height = joystick0.offsetHeight;
        const joystick0Left = joystick0.offsetLeft;
        const joystick0Top = joystick0.offsetTop;
        const joystick0Width = joystick0.offsetWidth;
        const touchX = touch.clientX;
        const touchY = touch.clientY;
        if (touchX >= joystick0Left && touchX <= (joystick0Left + joystick0Width)) {
            if (touchY >= joystick0Top && touchY <= (joystick0Top + joystick0Height)) {
                const x = (touchX - joystick0Left) / joystick0Width;
                const y = (touchY - joystick0Top) / joystick0Height;
                output0.innerText = x.toFixed(4);
                output1.innerText = y.toFixed(4);
            }
        }
    }
};
const checkJoystick1 = (touch) => {
    const joystick1 = document.getElementById('joystick1');
    const output2 = document.getElementById('output2');
    const output3 = document.getElementById('output3');
    if (joystick1 !== null && output2 !== null && output2 !== null) {
        const joystick1Height = joystick1.offsetHeight;
        const joystick1Left = joystick1.offsetLeft;
        const joystick1Top = joystick1.offsetTop;
        const joystick1Width = joystick1.offsetWidth;
        const touchX = touch.clientX;
        const touchY = touch.clientY;
        if (touchX >= joystick1Left && touchX <= (joystick1Left + joystick1Width)) {
            if (touchY >= joystick1Top && touchY <= (joystick1Top + joystick1Height)) {
                const x = (touchX - joystick1Left) / joystick1Width;
                const y = (touchY - joystick1Top) / joystick1Height;
                output2.innerText = x.toFixed(4);
                output3.innerText = y.toFixed(4);
            }
        }
    }
};
const touching = (touchEvent) => {
    const touch0 = touchEvent.touches[0];
    checkJoystick0(touch0);
    checkJoystick1(touch0);
    if (touchEvent.touches.length > 1) {
        const touch1 = touchEvent.touches[1];
        checkJoystick0(touch1);
        checkJoystick1(touch1);
    }
};
const listeners = () => {
    window.addEventListener('resize', resizeDivs);
    document.addEventListener('touchmove', touching);
};
const main = () => {
    listeners();
    resizeDivs();
};
main();
