function processInput(inp){
    inp = inp.toLowerCase();
    inp = inp.replace(/\s+/g, '');
    let found = false;
    for(let r in responses){
        if(inp == r){
            found = true;
            respDiv.innerHTML = responses[r];
            break;
        }
    }
    if(!found){
        let pick = Math.floor(Math.random()*invalidInpResponses.length);
        respDiv.innerHTML = invalidInpResponses[pick];
    }
}

function speakClick(){
    let input = txtArea.value;
    txtArea.value = "";
    processInput(input);
}