function calculate(){
    var bookone =parseInt(document.getElementById('bookOne').value);
    var booktwo =parseInt(document.getElementById('bookTwo').value);
    var bookthree =parseInt(document.getElementById('bookThree').value);
    var bookfour =parseInt(document.getElementById('bookFour').value);
    var bookfive =parseInt(document.getElementById('bookFive').value);

    if(bookone>100 || booktwo>100 || bookthree>100 || bookfour>100 || bookfive>100){
        alert("Please Enter Correct Value")
    }
    else{
        var obtain = bookone+booktwo+bookthree+bookfour+bookfive;
        document.getElementById('obtain').innerHTML=obtain;
        var per = obtain/500*100;
        document.getElementById('per').innerHTML=per;
        if(bookone>40 && booktwo>40 && bookthree>40 && bookfour>40 && bookfive>40){
        document.getElementById('remarks').innerHTML="<span style='color: green;'>Pass</span>";
        }
        else{
        document.getElementById('remarks').innerHTML="<span style='color: red;'>Fail</span>";
        }
        if(per>=80){
            document.getElementById('grade').innerHTML="A+"
        }
        else if(per>=70){
            document.getElementById('grade').innerHTML="A"
        }
        else if(per>=60){
            document.getElementById('grade').innerHTML="B"
        }
        else if(per>=50){
            document.getElementById('grade').innerHTML="C"
        }
        else if(per>=40){
            document.getElementById('grade').innerHTML="D"
        }
        else if(per>=40){
            document.getElementById('grade').innerHTML="E"
        }
        else{
            document.getElementById('grade').innerHTML="F"
        }
    }
    return false;
}