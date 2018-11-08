const readline = require('readline');
const csv = require('fast-csv'); 
const fs = require('fs'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

   var stream = fs.createReadStream("questionbank.csv", 'utf8');

   console.log('--------Get ready for the short quiz, relax for 3 secs----------')

    csv
    .fromStream(stream, {headers : false})
     .on("data", function(data){
      setTimeout(function(){
           // console.log('data',data);
     for (let index = 0; index < data.length; index++) {
        rl.question(data[index]+'\n', (answer) => {

            if(answer.toLowerCase()===data[1]){
           console.log(`Wow! you got it\nThe answer is : ${answer}`);   }
           else{
              console.log(`Ouch! your answer: (${answer}) is wrong`);  

           }
          rl.close();
            });
      
       
            }

}, 3000)

          //  console.log(data);
 })
//  .on("end", function(){
//      console.log("done");
//  });




//    obj.from.path('questionbank.csv').to.array(function (data) {

//     for (var index = 0; index < data.length; index++) {

//         MyData.push(new MyCSV(data[index][0], data[index][1] ));

//     }

//     console.log(MyData);

// });
