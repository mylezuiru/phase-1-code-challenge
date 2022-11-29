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
//calculate speed
function speed(){
    const kmh = document.getElementById("answer").value
    let answer;

    if(kmh > 70){
        answer = (kmh-70)/5
        if(answer > 12){
            answer = 'License has been suspended'
        }
    }else if(kmh >= 0 && kmh <=70){
        answer = "OK"
    }else{
        answer = 'enter a valid number'
    }

    document.getElementById('writeSpeed').innerHTML = answer
}//calculate netSalary

function netSalary(){
    const salary = document.getElementById('gross').value
    

    let NHIF,NSSF,netPay,payee;

    if(salary >= 0 && salary<= 6000){
        NSSF = salary*0.6
    }else if(salary > 6000 && salary<= 18000){
        NSSF = 360 + (salary*0.6) * 0.06
    }else if(salary > 18000){
        NSSF = 1080
    }


    if(salary >= 0 && salary <=5999){
        NHIF = 150;
    }else if(salary >= 6000 && salary <=7999){
        NHIF = 300;
    }else if(salary >= 8000 && salary <=11999){
        NHIF = 400
    }else if(salary >= 12000 && salary <=14999){
        NHIF = 500
    }else if(salary >= 15000 && salary <=19999){
        NHIF = 600
    }else if(salary >= 20000 && salary <=24999){
        NHIF = 750
    }else if(salary >= 25000 && salary <=29999){
        NHIF = 850
    }else if(salary >= 30000 && salary <=34999){
        NHIF = 900
    }else if(salary >= 35000 && salary <=39999){
        NHIF = 950
    }else if(salary >= 40000 && salary <=44999){
        NHIF = 1000
    }else if(salary >= 45000 && salary <=49999){
        NHIF = 1100
    }else if(salary >= 50000 && salary <=59999){
        NHIF = 1200
    }else if(salary >= 60000 && salary <=69999){
        NHIF = 1300
    }else if(salary >= 70000 && salary <=79999){
        NHIF = 1400
    }else if(salary >= 80000 && salary <=89999){
        NHIF = 1500
    }else if(salary >= 90000 && salary <=99999){
        NHIF = 1600
    }else if(salary > 100000){
        NHIF = 1700
    }
// calculate insurance relief and taxable amount
    let insurance = NHIF*0.15
    let taxable = salary - NSSF

    if(taxable >= 0 && taxable <= 24000){
        payee = 0 + (taxable-0)*0.1 -2400 - insurance
    }else if(taxable > 24000 && taxable <= 32333){
        payee = 2400 + (taxable-24000)*0.25 -2400 - insurance
    }else if(taxable > 32333){
        payee  =4483 + (taxable-32333)* 0.3 - 2400 -insurance
    }else{
        payee = 'not a salary'
    }

    if(payee < 0){
        payee = 0
    }

    netPay = salary-payee-NHIF-NSSF
    if(netPay < 0){
        netPay = 0
    }

    document.getElementById('grossSalary').innerHTML = `GROSS PAY: ${salary}`
    document.getElementById('nhif').innerHTML = `NHIF: ${NHIF}`
    document.getElementById('payee').innerHTML = `PAYEE: ${payee}`
    document.getElementById('nssf').innerHTML = `NSSF: ${NSSF}`
    document.getElementById('netPay').innerHTML = `NET PAY: ${netPay}`


}