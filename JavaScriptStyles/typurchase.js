let count = null;
function startCountdown() {
    const input = document.getElementById  ("countInput").value;
    count = parseInt(input);

    if(isNaN (count) || count <=0){
        document.getElementById("display").innerHTML="please enter a positive number";
        return;
    }

    document.getElementById("display").innerHTML=count;

    for (i=count; i >= 0; i--) {
        document.getElementById("display").innerHTML=i;
        console.log(i);
        setTimeout(10000);
    }
document.getElementById("display").innerHTML= "time is up!";
}