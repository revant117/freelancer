// //basic client side  validations
//
// trimInput = function(value) {
//     return value.replace(/^\s*|\s*$/g, '');
// };
//
// isNotEmpty = function(value) {
//     if (value && value !== ''){
//         return true;
//     }
//     console.log('Please fill in all required fields.');
//     return false;
// };
//
// isEmail = function(value) {
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (filter.test(value)) {
//         return true;
//     }
//     console.log('Please enter a valid email address.');
//     return false;
// };
//
// isValidPassword = function(password) {
//     if (password.length < 6) {
//         console.log('Your password should be 6 characters or longer.');
//         return false;
//     }
//     return true;
// };
//
// areValidPasswords = function(password, confirm) {
//     if (!isValidPassword(password)) {
//         return false;
//     }
//     if (password !== confirm) {
//         console.log('Your two passwords are not equivalent.');
//         return false;
//     }
//     return true;
// };
//
// // ------------------------------------------------------------------
//
// Template.SignUp.events({
//   'submit #signUpForm': function(e, t) {
//     e.preventDefault();
//
//     var signUpForm = $(e.currentTarget),
//         email = trimInput(signUpForm.find('#signUpEmail').val().toLowerCase()),
//         password = signUpForm.find('#signUpPassword').val(),
//         passwordConfirm = signUpForm.find('#signUpPasswordConfirm').val();
//
//     if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {
//
//       Accounts.createUser({email: email, password: password}, function(err) {
//         if (err) {
//           if (err.message === 'Email already exists. [403]') {
//             console.log('We are sorry but this email is already used.');
//           } else {
//             console.log('We are sorry but something went wrong.');
//           }
//         } else {
//           console.log('Congrats new Meteorite, you\'re in!');
//         }
//       });
//
//     }
//     return false;
//   },
// });
