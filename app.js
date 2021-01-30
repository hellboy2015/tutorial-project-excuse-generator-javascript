let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function excuse() {

    function randomSelection(rgnSize){
        return Math.floor(Math.random()*rgnSize);
    }

    function generateExcuse() {
        var excuse = "";
        excuse = who[randomSelection(who.length)]+" "+action[randomSelection(action.length)]+" "+what[randomSelection(what.length)]+" "+when[randomSelection(when.length)]
        return excuse;
    }
    document.getElementById("excuse").innerHTML = generateExcuse();
}