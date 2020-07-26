
// User status view
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedInManager = document.querySelectorAll(".logged-in-manager");
const loggedInEmp = document.querySelectorAll(".logged-in-emp");


const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
    document.getElementById('AboutPage').style.display = 'none';

    db.collection('users').doc(user.uid).get().then(doc => {
      if (doc.data().manager === true) {
        loggedInManager.forEach(item => item.style.display = 'block');
        document.getElementById('AccountPage').style.display = 'block';
        document.getElementById('EmployeePage').style.display = 'none';
        document.getElementById('TasksPage').style.display = 'none';
        document.getElementById('ManagerMenu1').classList.add('active');
        document.getElementById('ManagerMenu2').classList.remove('active');
        document.getElementById('ManagerMenu3').classList.remove('active');
      } else {
        loggedInManager.forEach(item => item.style.display = 'none');
        document.getElementById('AccountPage').style.display = 'none';
        loggedInEmp.forEach(item => item.style.display = 'block');
        document.getElementById('EmployeePage').style.display = 'none';
        document.getElementById('TasksPage').style.display = 'none';
      }
    })






  } else {
    document.getElementById('AboutPage').style.display = 'block';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    loggedInManager.forEach(item => item.style.display = 'none');
    loggedInEmp.forEach(item => item.style.display = 'none');
  }
};

document.getElementById('emp-account').style.display = 'block';

// Left menu activation
document.getElementById('ManagerMenu2').onclick = function () {
  document.getElementById('ManagerMenu2').classList.add('active');
  document.getElementById('ManagerMenu1').classList.remove('active');
  document.getElementById('ManagerMenu3').classList.remove('active');

  document.getElementById('AccountPage').style.display = 'none';
  document.getElementById('EmployeePage').style.display = 'block';
  document.getElementById('TasksPage').style.display = 'none';

};

document.getElementById('ManagerMenu1').onclick = function () {
  document.getElementById('ManagerMenu1').classList.add('active');
  document.getElementById('ManagerMenu2').classList.remove('active');
  document.getElementById('ManagerMenu3').classList.remove('active');

  document.getElementById('AccountPage').style.display = 'block';
  document.getElementById('EmployeePage').style.display = 'none';
  document.getElementById('TasksPage').style.display = 'none';

};

document.getElementById('ManagerMenu3').onclick = function () {
  document.getElementById('ManagerMenu3').classList.add('active');
  document.getElementById('ManagerMenu2').classList.remove('active');
  document.getElementById('ManagerMenu1').classList.remove('active');

  document.getElementById('AccountPage').style.display = 'none';
  document.getElementById('EmployeePage').style.display = 'none';
  document.getElementById('TasksPage').style.display = 'block';

};

document.getElementById('EmpMenu1').onclick = function () {
  document.getElementById('EmpMenu1').classList.add('active');
  document.getElementById('EmpMenu2').classList.remove('active');


  document.getElementById('emp-account').style.display = 'block';
  document.getElementById('emp-task').style.display = 'none';
};

document.getElementById('EmpMenu2').onclick = function () {
  document.getElementById('EmpMenu2').classList.add('active');
  document.getElementById('EmpMenu1').classList.remove('active');


  document.getElementById('emp-task').style.display = 'block';
  document.getElementById('emp-account').style.display = 'none';
};


// Left menu collapse
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

// Helps me a lot
function doThisPlease(aux) {
  return aux.concat(aux, 'bar')
}
var myHelper = 'foo';



// Select box 1
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

//---

const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});





// Add new skill for task modal
function addItem() {


  var ul = document.getElementById("dynamic-list");
  var items = ul.getElementsByTagName("li");

  var candidate = document.getElementById("candidate");
  var candidate1 = document.getElementById("candidate1");
  var li = document.createElement("li");
  if (candidate1.value > 3) {
    candidate1.value = 3;
  }
  if (candidate1.value < 0) {
    candidate1.value = 0;
  }


  var OK = 1;
  //console.log(items);
  for (var i = 0; i < items.length; ++i) {
    //console.log(items[i].innerHTML);
    splitItems = items[i].innerHTML.split(' ');
    var skill1 = splitItems[0];
    var diff1 = splitItems[1];

    if (selected.textContent == skill1) {

      OK = 0;
      items[i].innerHTML = skill1 + " " + candidate1.value;
      //console.log(items[i].innerHTML);
    }
    else {

    }

  }
  //console.log(OK);
  if (OK == 1) {

    li.setAttribute('id', selected.textContent);
    li.setAttribute('id', candidate1.value);
    li.appendChild(document.createTextNode(selected.textContent));
    li.append(" ");
    li.appendChild(document.createTextNode(candidate1.value));
    ul.appendChild(li);

  } else {

  }


}


// Add new skill for employee modal
function addItem1() {
  var ul = document.getElementById("dynamic-list1");
  var items = ul.getElementsByTagName("li");

  var candidate2 = document.getElementById("candidate2");
  var candidate3 = document.getElementById("candidate3");
  var li = document.createElement("li");
  if (candidate3.value > 3) {
    candidate3.value = 3;
  }
  if (candidate3.value < 0) {
    candidate3.value = 0;
  }

  var OK = 1;
  //console.log(items.length);
  for (var i = 0; i < items.length; ++i) {
    //console.log(items[i].innerHTML);
    splitItems = items[i].innerHTML.split(' ');
    var skill1 = splitItems[0];
    var diff1 = splitItems[1];

    if (selected2.textContent == skill1) {
      OK = 0;
      items[i].innerHTML = skill1 + " " + candidate3.value;
      //console.log(items[i].innerHTML);
    }
    else {

    }

  }

  if (OK == 1) {

    li.setAttribute('id', selected2.textContent);
    li.setAttribute('id', candidate3.value);
    li.appendChild(document.createTextNode(selected2.textContent));
    li.append(" ");
    li.appendChild(document.createTextNode(candidate3.value));
    ul.appendChild(li);

  } else {

  }

}


// Useful stuff
function clear1() {
  var lista = document.getElementById("dynamic-list1");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.lastChild);
  }
}

function clear2() {
  var lista = document.getElementById("dynamic-list");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.lastChild);
  }
}

function deleteUsers() {
  let table = document.getElementById("tbody");
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
}

function deleteTasks() {
  let table = document.getElementById("tbody1");
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }

}




//Add employee

function addEmployee() {
  var lista = document.getElementById("dynamic-list1");
  var items = lista.getElementsByTagName("li");
  var splitItems;



  var config = {
    apiKey: "AIzaSyBus9J8j76GWduCkVO5yTp8OPsQ-WgdJ48",
    authDomain: "task-manager-7a4ee.firebaseapp.com",
    databaseURL: "https://task-manager-7a4ee.firebaseio.com"
  };
  var secondaryApp = firebase.initializeApp(config, myHelper);
  const form1 = document.querySelector('#employee-form');

  myHelper = doThisPlease(myHelper);
  // get user info
  const email = document.getElementById('email-employee').value;
  const password = document.getElementById('password-employee').value;
  const prenume = document.getElementById('prenume-employee').value;
  const nume = document.getElementById('nume-employee').value;

  console.log(email, password);

  // sign up the user
  secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(cred => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        //console.log(cred.user.uid);
        //console.log(user.uid);
        var taskList = [];
        db.collection('users').doc(cred.user.uid).set({
          Name: nume,
          Surname: prenume,
          Id: cred.user.uid,
          BusyDays: 0,
          TaskList: taskList
        }, { merge: true }).then(function () {
          console.log();
        });

        var skillList = [];
        db.collection('users').doc(cred.user.uid).set({ skillList }, { merge: true }).then(function () {
          //console.log("Skill added");
        });
     
        console.trace();
        console.log("m-am apelat singur");
        
        for (var i = 0; i < items.length; ++i) {
          //console.log(items[i].innerHTML);
          splitItems = items[i].innerHTML.split(' ');
          var skill1 = splitItems[0];
          var diff1 = splitItems[1];
          //console.log( skill1, diff1);
          db.collection('users').doc(cred.user.uid).update({
            skillList: firebase.firestore.FieldValue.arrayUnion(skill1 + " " + diff1)
          });
        }

     
   
        var database1 = db.collection('users').doc(user.uid);
        database1.update({
          employeeList: firebase.firestore.FieldValue.arrayUnion(cred.user.uid)
        }
        );

      } else {
        // No user is signed in.
      }
    });

    return db.collection('users').doc(cred.user.uid).set({
      manager: false
    })

  }).then(() => {

    secondaryApp.auth().signOut();
    const modal = document.querySelector('#modal-employee');
    M.Modal.getInstance(modal).close();
    form1.reset();
  

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/email-already-in-use') {
      alert('Email already in use!');
    } else {
      alert(errorMessage);
    }
    console.log(error);

  });

  deleteUsers();
 
  
}




// God bless
function giveEmpWork(id) {
  //console.log("here we go");
  var min = 9999;
  var bestEmp;


  console.log(id + " also thig");
  db.collection('tasks').where("Id", "==", id).get().then(thing => {
    console.log(id);
    thing.forEach(anotherThing => {
      console.log(anotherThing.data());
      var dayz = parseInt(anotherThing.data().Days);
      var possibleEmp = anotherThing.data().eligibleEmp;
     
      console.log(possibleEmp.length);
      if(possibleEmp.length != 0){
        console.log("nuuu");
      for (var i = 0; i < possibleEmp.length; i++) {
        console.log(possibleEmp[i]);
        db.collection('users').where("Id", "==", possibleEmp[i]).get().then(snapshot => {
          snapshot.forEach(doc => {

            dayz = dayz + parseInt(doc.data().BusyDays);
            console.log(dayz);
            if (doc.data().BusyDays < min) {
              console.log("da");
              console.log(doc.data().Id);
              bestEmp = doc.data().Id;
              min = doc.data().BusyDays;
              console.log(bestEmp);
            }

          })
        }).then(function () {
          console.log(bestEmp);
         
          db.collection('users').doc(bestEmp).update({
            taskList: firebase.firestore.FieldValue.arrayUnion(id),
            BusyDays: dayz
          })
      

        })

      }
    }else
    { console.log("daaaa");
      }
    })
  })
}


// AddTask

function addTask() {
  auth.onAuthStateChanged(user => {
    var lista = document.getElementById("dynamic-list");
    var items = lista.getElementsByTagName("li");
    var splitItems;


    const form1 = document.querySelector('#task-form');
    // get task info
    const id = document.getElementById('id-task').value;
    const days = document.getElementById('nume-task').value;
    const deadline = document.getElementById('deadline-task').value;
    const form2 = document.querySelector('#task-form');



    var requiredSkills = [];
    var eligibleEmp = [];
    db.collection('tasks').doc(id).set({
      Id: id,
      Days: days,
      Deadline: deadline,
      Active: false,
      Finished: false,
      eligibleEmp,
      requiredSkills

    })
    console.log(days + "wtf");
    for (var i = 0; i < items.length; ++i) {
      //console.log(items[i].innerHTML);

      splitItems = items[i].innerHTML.split(' ');
      var skill1 = splitItems[0];
      var diff1 = splitItems[1];
      //console.log(skill1 +" " +diff1);
      db.collection('tasks').doc(id).update({
        requiredSkills: firebase.firestore.FieldValue.arrayUnion(skill1 + " " + diff1)
      });



    }


    if (user) {
      db.collection('users').doc(user.uid).update({
        taskList: firebase.firestore.FieldValue.arrayUnion(id)
      })
    }

    // awesome algorithm
    var splitItems1;
    var splitItems2;
    var possibleEmp = [];
    db.collection('users').doc(user.uid).get().then(doc => {
      var empList = doc.data().employeeList;

      for (var i = 0; i < empList.length; i++) {
        db.collection('users').where("Id", "==", empList[i]).get().then(snapshot => {
          snapshot.forEach(doc1 => {

            var k = 0;
            var skillList1 = doc1.data().skillList;
            for (var j = 0; j < items.length; ++j) {
              k++;
              splitItems1 = items[j].innerHTML.split(' ');
              var skill = splitItems1[0];
              var diff = splitItems1[1];

              for (var jj = 0; jj < skillList1.length; ++jj) {
                splitItems2 = skillList1[jj].split(' ');
                var skill2 = splitItems2[0];
                var diff2 = splitItems2[1];

                if (skill === skill2 && diff <= diff2) {
                  k--;

                }
              }

              if (k == 0) {
                possibleEmp.push(doc1.data().Id);
               
                db.collection('tasks').doc(id).update({
                  eligibleEmp: firebase.firestore.FieldValue.arrayUnion(doc1.data().Id)
                
                });
              }
            }
          }
          )
        }).then(function () {
          console.log("hello");
          giveEmpWork(id);
        })
      }

    })

    const modal = document.querySelector('#modal-task');
    M.Modal.getInstance(modal).close();

    form2.reset();

    deleteTasks();
  });

}


//Functia pentru modificare poze cand nu esti logat

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//







// Tables 

function createTable() {
  let table = document.getElementById("tbody");
  table.innerHTML = "";
}

function createTable2() {
  let table = document.getElementById('tbody1');
  table.innerHTML = "";
}

function createTable3() {
  let table = document.getElementById('tbody2');
  table.innerHTML = "";
}


// Tasks table manager
function createTasks(user,id) {
  let table = document.getElementById("tbody1");
  let tr = document.createElement("tr");
  tr.id=id;
  for (let i of user) {
    let td = document.createElement("td");
    td.innerHTML = i;
    tr.appendChild(td);
  }



  let btnd = document.createElement("button");
  btnd.innerHTML = "DELETE";


  btnd.classList.add("btn", "btn-info", "btn-lg", "modal-trigger");

  console.log();
  btnd.addEventListener('click', (tool) => {
    tool.stopPropagation();
    let id = tool.target.parentElement.parentElement.id;
    db.collection('tasks').doc(id).delete();
    auth.onAuthStateChanged(user =>{
      anotherTool = db.collection('users').doc(user.uid);
      anotherTool.update({
        taskList: firebase.firestore.FieldValue.arrayRemove(id)
      });
    })
    console.log(event.target.parentElement.parentElement.id);
  })

  let td = document.createElement("td");
 
  td.appendChild(btnd);
  tr.appendChild(td);
  // table.appendChild(btn);
  // table.appendChild(btnd);
  table.appendChild(tr);

  

}


function createTasks2(user,id,status) {
  let table = document.getElementById("tbody2");
  let tr = document.createElement("tr");
  tr.id=id;
  for (let i of user) {
    let td = document.createElement("td");
    td.innerHTML = i;
    tr.appendChild(td);
  }

  let btn = document.createElement("button");
  btn.innerHTML = "Work";

  let btnd = document.createElement("button");
  btnd.innerHTML = "Finish";

  btn.classList.add("btn", "btn-info", "btn-lg", "modal-trigger");
  btn.dataset.target = "modal-editEmp";
  btnd.classList.add("btn", "btn-info", "btn-lg", "modal-trigger");

  if (status){
    btn.classList.remove("btn", "btn-info", "btn-lg", "modal-trigger");
    btn.classList.add( "lgButton", "btncolor", "btnceva");

  }
  else{
  btn.classList.remove( "lgButton", "btncolor", "btnceva");
  btn.classList.add("btn", "btn-info", "btn-lg", "modal-trigger");
  }
  console.log("daa");

  btnd.addEventListener('click', (tool) => {
    tool.stopPropagation();
    let id = tool.target.parentElement.parentElement.id;
    db.collection('tasks').doc(id).update({ "Finished": true })

    auth.onAuthStateChanged(user =>{
      anotherTool = db.collection('users').doc(user.uid);
      anotherTool.update({
        taskList: firebase.firestore.FieldValue.arrayRemove(id)
      });
    })
    console.log(event.target.parentElement.parentElement.id);
  })
    
  //-----------------------------------------------------------------
   btn.addEventListener('click', (tool) => {
    tool.stopPropagation();
   
    let id = tool.target.parentElement.parentElement.id;
    

    auth.onAuthStateChanged(user =>{

     db.collection('users').doc(user.uid).onSnapshot(doc => {
    
       var tasklist = doc.data().taskList;
       for (var i = 0 ; i < tasklist.length; i++){
      
        db.collection('tasks').doc(tasklist[i]).update({Active: false}).then(function(){
          db.collection('tasks').doc(id).update({ Active: true })
        })
       
        }
        db.collection('users').doc(user.uid).set({ "alo": "test" }, { merge: true }).then(function () {
          //console.log("Skill added");
        });
     })
    })
    
  })

  let td = document.createElement("td");
  td.appendChild(btn);
  td.appendChild(btnd);
  tr.appendChild(td);
  // table.appendChild(btn);
  // table.appendChild(btnd);
  table.appendChild(tr);

}


// Users table
function createUsers(user, id){

  let table = document.getElementById("tbody");
  let tr=document.createElement("tr");
  tr.id=id;
  for (let i of user ){
    let td=document.createElement("td");
    td.innerHTML=i;
    tr.appendChild(td);
  }

 
  
  let btnd=document.createElement("button");
    btnd.innerHTML="DELETE";

 

  btnd.classList.add("btn", "btn-info", "btn-lg", "modal-trigger");


  let td=document.createElement("td");
  
  td.appendChild(btnd);
  tr.appendChild(td);
  // table.appendChild(btn);
  // table.appendChild(btnd);
  table.appendChild(tr);

  btnd.addEventListener('click', (tool) => {
    
    tool.stopPropagation();
    let id = tool.target.parentElement.parentElement.id;
    db.collection('users').doc(id).delete();
    auth.onAuthStateChanged(user =>{
      anotherTool = db.collection('users').doc(user.uid);
      anotherTool.update({
        employeeList: firebase.firestore.FieldValue.arrayRemove(id)
      });
    })
    console.log(event.target.parentElement.parentElement.id);
  })

}



$("#resetEmail").click(function()
{
var auth = firebase.auth();
var user = firebase.auth().currentUser;
var newEmail = $("#resetEmail11").val();
if(newEmail !="")
{
  user.updateEmail(newEmail).then(function()
  {
    window.alert("Email has been changed");
  })
  .catch(function(error)
  {
    var errorCode = error.code;
      var errorMessage= error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message:" +errorMessage);
  });
}
  else{
    window.alert("New email is empty")
  }
});


$("#resetPassword").click(function()
{
  var auth = firebase.auth();
  var email = $("#reset-email").val();
  if(email !="")
  {
    auth.sendPasswordResetEmail(email).then(function()
    {
      window.alert("Email has been send to you, please check your email");
    })
    .catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage= error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message:" +errorMessage);
    });

  }
  else{
    window.alert("The email field is required")
  }
});


const accountDetails= document.querySelector('.account-info'); 
const accountDetails1= document.querySelector('.account-info1'); 

 



// Real time listener
auth.onAuthStateChanged(user => {
  createTable();
  createTable2();
  createTable3();
  deleteTasks();
  deleteUsers();
  if (user) { db.collection('users').doc(user.uid).onSnapshot(doc =>{
      let nume= doc.data().Name;
      let email= doc.data().Email;
      let Surname= doc.data().Prenume;
      console.log(Surname);
      const html = `
    <div> Name: ${nume} 
    <p>Surname: ${Surname} </p>
    <p>Email: ${user.email} </p>
       </div>
    `;

      let Prenumele= doc.data().Surname;
    const html1 = `
    <div> Name: ${nume} 
    <p>Surname: ${Prenumele} </p>
    <p>Email: ${user.email} </p>
       </div>
    `;
    accountDetails1.innerHTML = html1;
    accountDetails.innerHTML = html;
     
      
    });
    db.collection('users').doc(user.uid).onSnapshot(doc => {
      let table = document.getElementById("tbody");

      if (doc.data().manager === true) {
        var empList = doc.data().employeeList
        createTable();
        for (var i = 0; i < empList.length; i++) {

          db.collection('users').where('Id', '==', empList[i]).get().then((snapshot) => {
            snapshot.forEach(doc => {

              // console.log(doc.data().Name + " " + doc.data().Surname);
              let nume = doc.data().Name;
              let prenume = doc.data().Surname;
              let skills = "";
              let id=doc.data().Id;
              //console.log(nume);
              for (var j = 0; j < doc.data().skillList.length; j++) {
                //console.log(doc.data().skillList[j]);
                skills = skills + doc.data().skillList[j] + " ";
              }

              createUsers([nume, prenume, skills],id);
              //console.log("1");
              //console.log(doc.data().Name);

            })
          });
        }
        var taskList = doc.data().taskList
        createTable2();
        for (var i = 0; i < taskList.length; i++) {
          db.collection('tasks').where('Id', '==', taskList[i]).get().then((snapshot) => {
            snapshot.forEach(doc => {
              //console.log(doc.data().Name+" "+doc.data().Deadline+" "+doc.data().requiredSkills);
             
              let tid = doc.data().Id;
              let dayz = doc.data().Days;
              let tskills = "";
              let tdeadline = doc.data().Deadline;
              let status1 = doc.data().Finished;
              let status2 = doc.data().Active;
              for (var i = 0; i < doc.data().requiredSkills.length; i++) {
                tskills = tskills + doc.data().requiredSkills[i] + " ";

              }

              if(status1)
              createTasks([tid, dayz, tskills, tdeadline, "Finished"],tid);
              else
              if(status2)
              createTasks([tid, dayz, tskills, tdeadline, "Working"],tid);
              else
              createTasks([tid, dayz, tskills, tdeadline, "On hold"],tid);
              //console.log("2");
            });

          });

        }

        // Employee access
      } else {
        //employee account info
        console.log(doc.data().Name +" "+ doc.data().Surname+" "+doc.data().skillList)



        // employee task list
        createTable3();
        var taskList1 = doc.data().taskList;
        for (var i = 0; i < taskList1.length; i++) {
          db.collection('tasks').where('Id', '==', taskList1[i]).get().then((snapshot) => {
            snapshot.forEach(doc3 => {
              console.log(doc3.data().Id+" "+doc3.data().Deadline+" "+doc3.data().requiredSkills);
             
              let tid = doc3.data().Id;
              let dayz = doc3.data().Days;
              let tskills = "";
              let tdeadline = doc3.data().Deadline;
              let status = doc3.data().Active;
              
              for (var i = 0; i < doc3.data().requiredSkills.length; i++) {
                tskills = tskills + doc3.data().requiredSkills[i] + " ";

              }
              if(status){
              createTasks2([tid, dayz, tskills, tdeadline,"Working"],tid, status);
              }else{
                createTasks2([tid, dayz, tskills, tdeadline,"On hold"],tid, status);
              }
              console.log(status);
            });

          });

        }
      }

    })

  }
});
console.log('nice');