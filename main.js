

let btn=document.getElementById("calculate-button");

btn.addEventListener('click',function() {

    let heigth=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;


    if(heigth=='' || weight ==""){
        alert('please fill the proper details :) ')
        return
    }
    if (heigth<30 || weight <2.5) {
        alert('Kindly check the values height should be > 30cm and weight >2.5kg ')
        return

    }
    const height_in_meter=heigth/100;
    let BMI=(weight/(height_in_meter*height_in_meter))
    console.log(BMI)
    BMI.toString
    document.querySelector(".BMI").innerHTML=BMI;
    let BMI_status=''
    if (BMI<18.5){
        BMI_status="Under-Weight"
    }
    if(BMI>=18.5 && BMI<25){
        BMI_status="Healthy"
    }
    if(BMI>=25 && BMI<30 ){
        BMI_status="Over-Weight"
    }
    if(BMI>30){
        BMI_status="Obese "
    }    
    document.querySelector(".BMI_status").innerHTML=`Status: You Are <span id="comment">${BMI_status}</span>`


})


