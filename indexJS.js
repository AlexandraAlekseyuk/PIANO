



const keySounds = new Map([
    ['A', "./A.mp3"],
    ['D', "./D.mp3"],
    ['F', "./F.mp3"],
    ['G',"./G.mp3"],
    ['H',"./H.mp3"],
    ['J', "./J.mp3"],
    ['S',"./S.mp3"],
    ['W',"./W.mp3"],
    ['E',"./E.mp3"],
    ['T',"./T.mp3"],
    ['Y',"./Y.mp3"],
    ['U',"./U.mp3"],
]);

document.addEventListener('keydown', (event) => {
    let key = event.key.toUpperCase();
    if (keySounds.has(key)) {
new Audio(keySounds.get(key)).play();
    } else {
        console.log("warning! Another key is pressed!")
    }
})
