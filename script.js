function calculateBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height==="" || weight===""){
        alert("Please enter values")
    }
    else if(height<=0 || weight<=0){
        alert("Please enter valid values");
    }
    else{
    let bmi = (weight / (height * height)*10000).toFixed(2);

    console.log(parseFloat(bmi))

    let insert = document.getElementById("bmi")

    insert.innerHTML = bmi

        let line 

        if(bmi<=18.5){
            line = document.getElementById("underweight")
            line.style.backgroundColor = "blue"
        }else if(bmi>18.5 && bmi<24.9){
            line = document.getElementById("normal")
            line.style.backgroundColor = "green"
        }else if(bmi>=25 && bmi<=29.9){
            line = document.getElementById("overweight")
            line.style.backgroundColor = "orange"
        }else if(bmi>30){
            line = document.getElementById("obese")
            line.style.backgroundColor = "red"
        }
    }
}