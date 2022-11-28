function score(){
    const grade = window.prompt("Enter Score", "50")

    if(grade >= 0 && grade<= 39){
        alert("Grade: E")
    }else if(grade >= 40 && grade<= 49){
        alert("Grade: D")
    }else if(grade >= 50 && grade<= 59){
        alert("Grade: C")
    }else if(grade >= 60 && grade<= 79){
        alert("Grade: B")
    }else if(grade >= 80 && grade<= 100){
        alert("Grade: A")
    }else{
        alert("enter a value")
    }
}