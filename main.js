

// let fs = require('fs')
// let data = fs.readFileSync('chat.js', 'utf8')
// let data = fs.readFile('chat.json', 'utf8', (err, next) => {
//     if(err){
//         console.log(err)
//     }else{
//         function tryJS(){
//             return document.getElementById('show').innerHTML = JSON.parse(data)
//         }
//     }
// })

// $('#show').append(`
// <p>${data}</p>
// `)
// main.displayObject('show', data)
// document.write(5 + 6)
// function tryJS(){
//     let wew = 'mangga'
//     // let data = require('./chat.json')
//     return document.getElementById('show').innerHTML = 'baal'
// }
// console.log(JSON.parse(data))
// console.log(data)


// function jono(){
//     // // return document.getElementById('boom').innerHTML = 'qiw'
//     // var chat = require('./chat.json')
//     var mydata = JSON.parse(chat)
//     alert(mydata[0].name)
// }
// function tryJS(){
//     var fs = require('fs')
//     var data = readFileSync('chat.json', 'utf8')
//     let wew = 'mangga'
//     // let data = require('./chat.json')
//     return document.getElementById('show').innerHTML = JSON.parse(data[0].name)
// }

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// //usage:
// readTextFile("./chat.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });
// function jono(){
//     var temp = null
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         // theMsg.innerHTML = `<img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796" class="mx-auto d-block" height="150px" style="margin-top : 80px">`
//         if (this.readyState == 4 && this.status == 200) {
//         temp = JSON.parse(this.responseText)
//         let theMsg = document.getElementById("logs")
//         // let theName = document.getElementById("name")
//         temp.data.map(el => {
//             el.messages.map((elel, i) => {
//                 let splited = elel.created_at.slice(11).split(' ')
//                 // let sliced = splited[1].slice(3)
//                 splited.sort(function (a, b) {
//                     return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
//                 });
//                 theMsg.innerHTML += `
//                  <div class="bubbleChat">
//                     <div class="photo"></div>
//                     <div class="chat">
//                         <p id="name">${el.name}</p>
//                         <p id="msg">${elel.message}</p>
//                     </div>
//                     <br> 
//                     <small>${splited}</small>       
//                 </div>`;
//                 //  theName.innerHTML = (el.name);
//             })
//         })
//         }
//     };
//     xhttp.open("GET", "chat.json", true);
//     xhttp.send();
// }

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function jono(){
    var temp = null
    var xhttp = new XMLHttpRequest();
    var newArr = []
    var color = ['#6fc2d0', '#ffba92', '#e0f5b9', '#f0dab1', '#00a79d']
    xhttp.onreadystatechange = function() {
        // theMsg.innerHTML = `<img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796" class="mx-auto d-block" height="150px" style="margin-top : 80px">`
        if (this.readyState == 4 && this.status == 200) {
        temp = JSON.parse(this.responseText)
        let theMsg = document.getElementById("logs")
        theMsg.scrollTop = theMsg.scrollHeight;
        // let theName = document.getElementById("name")
        temp.data.map(el => {
            el.messages.map((elel, i) => {
                let newObj = {}
                if(!newObj.id){
                    newObj.id = Number(el.id)
                }
                if(!newObj.name){
                    newObj.name = el.name
                }
                if(!newObj.message){
                    newObj.message = elel.message
                }
                if(!newObj.created_at){
                    newObj.created_at = elel.created_at
                }
                if(!newObj.status){
                    newObj.status = el.status
                }
                // let splited = elel.created_at.slice(11).split(' ')
                // // let sliced = splited[1].slice(3)
                // splited.sort(function (a, b) {
                    //     return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
                    // });
                    // theMsg.innerHTML += `
                    //  <div class="bubbleChat">
                    //     <div class="photo"></div>
                    //     <div class="chat">
                    //         <p id="name">${el.name}</p>
                    //         <p id="msg">${elel.message}</p>
                    //     </div>
                    //     <br> 
                    //     <small>${splited}</small>       
                    // </div>`;
                    // //  theName.innerHTML = (el.name);
                    newArr.push(newObj)
            })
        })
        // theMsg.innerHTML += newArr[0].created_at
        newArr.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
        newArr.map((element, i) => {
            var numberColor = 0
            if(element.id % 5 == 0){
                numberColor = 0
            }else if(element.id % 10 == 0){
                numberColor = 1
            }else if(element.id % 3 == 0){
                numberColor = 2
            }else if(element.id % 2 == 0){
                numberColor = 3
            }else if(element.id % 2 !== 0){
                numberColor = 4
            }
            if(i == newArr.length -1){
                document.getElementById("loader").style.display = "none"
            }
            theMsg.innerHTML += `
                      <div class="bubbleChat">
                         <div class="photo"></div>
                         <div class="chat">
                             <p id="name">${element.name}<small> (status : ${element.status})</small></p>
                             <p id="msg" style="background: ${color[numberColor]};">${element.message}</p>
                         </div>
                         <br> 
                         <small>${element.created_at}</small>       
                     </div>`;
        })
        }
    };

    xhttp.open("GET", "chat.json", true);
    xhttp.send();
}


