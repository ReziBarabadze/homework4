// დავალება 1 - მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 



let fruits = ['apple', 'mango', 'avocado','kiwi'];

fruits.splice(2, 1, 'strawberry');

console.log(fruits);

 








//დავალება 2 - მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.




let info = 'good day';

let result = info.slice(5);

console.log(result);




//დავალება 3 - დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.



// let word = 'hello';
// let welcome = word => {

//   for (item in word) {
//     return 
//   }
//   console.log(word);
  

// }
// welcome();










//დავალება 4 -შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

  // მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
  // მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
  // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  // წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;



  let array = [5, 25, 89, 120, 36];

  array.push('javascript', ' python');   // მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;

  array.unshift('html', 'css');   // მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;




  array.shift();    // წაშალეთ მასივიდან პირველი ელემენტი;
  array.pop();      // წაშალეთ მასივიდან  ბოლო ელემენტი;

  console.log(array);

    
  let arraySize = array.length;   // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  console.log(arraySize);






  //დავალება 5 -  შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

  // გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
  // მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
  // მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 
  // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  // მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
  // წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
  // გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

  
  
let array2 = ['ფორთოხალი', 'ბანანი', 'კივი'];

    
let size = array2.length;   // გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
console.log(size);


array2.push('ვაშლი', 'ანანასი');   // მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;

array2.unshift('საზამთრო');   // მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 


let size2 = array2.length;      // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log(size2);


array2.splice(2, 0, 'მანგო'); // მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;


array2.shift();    // წაშალეთ მასივიდან პირველი ელემენტი;
array2.pop();      //// წაშალეთ მასივიდან  ბოლო ელემენტი;





console.log(array2);



let size3 = array2.length;      // გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
console.log(size3);



//დავალება 6 - მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].	

let array3 =[1, 2, 3, 4, 5];

array3.splice(2, 0, 'a', 'b', 'c');

console.log(array3);





//დავალება 7 - მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
//  წაშალეთ ამ მასივიდან რიცხვი 10;


let array7 =  [15, 100, 25, 10, 36];

array7.splice(3, 1, );

console.log(array7);


//დავალება 8 - მოცემულია მასივი:   let array8 = [ 1, 2 , 3 , 4, 5] 
// Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;


let array8 = [ 1, 2 , 3 , 4, 5];


array8.splice(2, 1, 'three');

console.log(array8);




