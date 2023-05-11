let numbers=[2,3,5,6,8,11]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(+numbers[i]+" the number is even" );
    }
    else{
        console.log(+numbers[i] + " the number is odd");
    }
}