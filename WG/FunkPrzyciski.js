let pierwszy=document.querySelector("div[name='cod1-inf1']");
pierwszy.addEventListener('click',funkcja1());
function funkcja1(){
    alert("test")
    let focuson=document.querySelector("div[id='cod1-odwolanie']")
    
    document.getElementById('cod1-odwolanie').focus({preventScroll:false});
}