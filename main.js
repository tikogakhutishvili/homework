// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
function number(num){
    if(num > 0) console.log("დადებითია")
    else if(num < 0) console.log("უარყოფითია")
else console.log("ნულის ტოლია")
}
number(5)

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
function sum(){
    let summ = 0;
    for(let i = 1; i < 100; i++){
        summ+=i
    }
    console.log(summ)
}
sum()

// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი
function oddOreven(N){
    if(N % 2 === 0 && N != 0) console.log("ლუწია") 
    else if(N % 2 === 1 && N != 0) console.log("კენტია")
    else console.log("არცერთი არ არის,ანუ 0-ის ტოლია დდ")
}
oddOreven(11)

// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
const car = {
    name: "Ford mustang shelby GT500",
    age: 2022
}
let now= new Date().getFullYear()
function mycar(carr){
    console.log(now - carr.age)
}
mycar(car)

// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
function Array(){
     arr = [1,4,88,99, 123]
    max = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(max < arr[i])
        max = arr[i]
    }
    console.log(max)
}
Array()

// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი
function array(){
    let arr = [1,4,88,99, 123]
    let min = arr[0]
    for(let i = 0; i <= arr.length; i++){
        if(min > arr[i]) {
            min = arr[i]
    }
}
console.log(min)
}
array()
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
   function reverse(str){
    let rev = ""
       for(let i = str.length -1; i >= 0; i --){
           rev += str[i]
        }
        console.log(rev)
    }
    reverse("tiko")

