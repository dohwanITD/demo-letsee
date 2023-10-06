//
AFRAME.registerComponent('step-multi-ctrl', {
    schema: {
    },
    init() {
        console.log("Step-ctrl init");

        let isFirstTime = true;
        // Guide Panel ----------
        const guideDiv = document.getElementById('guidePanel')

        // const sceneEl = document.querySelector('a-scene');
        const exampleTarget01 = document.querySelector('#example-target01');
        const exampleTarget02 = document.querySelector('#example-target02');
        const exampleTarget03 = document.querySelector('#example-target03');
        const exampleTarget04 = document.querySelector('#example-target04');
        // arReady event triggered when ready
        // sceneEl.addEventListener("arReady", (event) => {
        //     console.log("MindAR is ready")
        //     // interval = setTimeout(() => {
        //     //     userClickHandler()
        //     // }, 3000)
        // });
        // // arError event triggered when something went wrong. Mostly browser compatbility issue
        // sceneEl.addEventListener("arError", (event) => {
        //     // console.log("MindAR failed to start")
        // });
        // // detect target found

        if(exampleTarget01){
            exampleTarget01.addEventListener("targetFound", event => {
                console.log("target found");
                guideDiv.style.display = 'none';
            });
        }

        if(exampleTarget02){
            exampleTarget02.addEventListener("targetFound", event => {
                console.log("target found");
                guideDiv.style.display = 'none';
            });
        }

        if(exampleTarget03){
            exampleTarget03.addEventListener("targetFound", event => {
                console.log("target found");
                guideDiv.style.display = 'none';
            });
        }

        if(exampleTarget04){
            exampleTarget04.addEventListener("targetFound", event => {
                console.log("target found");
                guideDiv.style.display = 'none';
            });
        }
    },
})
