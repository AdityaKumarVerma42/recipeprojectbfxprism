const signupform = document.querySelector('#signup-form');
signup-form.addEventListener('submit',(e) => {
e.preventDefault();

//get user info
const email = signupForm[ 'signup-email'].value;
const password = signupForm[ 'signup-password'].value;
 
// sign up the user
auth.createUserWithEmailAndPassword(email, password).then(cred=>{
 console.log(cred.user);
 const modal =document.querySelector('#my-signup');
 Map.Modal.getInstance(modal).close();
 signup-Form.reset();

})


})
