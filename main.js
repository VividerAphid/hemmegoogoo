function processInput(inp){
    inp = inp.toLowerCase();
    inp = inp.replace(/\s+/g, '');
    let found = false;
    let resp = "";
    for(let r in responses){
        if(inp == r){
            found = true;
            resp = responses[r];
            break;
        }
    }
    if(!found){
        let pick = Math.floor(Math.random()*invalidInpResponses.length);
        if(inp == ""){
            pick = 1;
        }
        respDiv.innerHTML = invalidInpResponses[pick];
    }
    else{
        respDiv.innerHTML = "Hmm.....";
        setTimeout(setResponse, 2000, resp);
    }
}

function speakClick(){
    let input = txtArea.value;
    txtArea.value = "";
    processInput(input);
}

function setResponse(res){
    respDiv.innerHTML = res;
}