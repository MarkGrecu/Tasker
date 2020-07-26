// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    setupUI(user);

  } else {
    setupUI();
  }
});

function deleteUsers() {
  let table = document.getElementById("tbody");
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

}

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const nume = signupForm['signup-nume'].value;
  const prenume = signupForm['signup-prenume'].value;
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      manager: true,
      Name: nume,
      Prenume: prenume,
      Email: email
     
    })

  }).then(() => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
 

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
    console.log(email);
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  deleteUsers();
  e.preventDefault();
  console.log('user logged out');
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/user-not-found') {
      alert('User doesnt exist.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });;

});