// import React from 'react'

// const FormValidation = () => {
//   return (
//     async function handleForm(event) {
//         event.preventDefault()
    
//         let errors = []
    
//         for( let i=0; i < event.target.length; i++) {
//             if (event.target[i].required) {
//                 errors.push(validate(event.target[i]))
//             }
//         }
    
//         if(!error.includes(false)) {
//             console.log('Send form')
    
//             const json = JSON.stringify({
//                 name: event.target['name'].value,
//                 email: event.target['email'].value,
//                 message: event.target['message'].value,
//             })
    
//             const res = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
//                 method: "post",
//                 headers: {
//                     "content-type": "application/json",
//                 },
//                 body: json
//             })
    
//             let data
//             if (res.status === 201) {
//                 data = await res.json()
//                 document.getElementById('statusMessages').innerHTML =`
//                 <div class="alert alert-success" role="alert">
//                     Good Work - Form Succesfully Submitted! <i class="fa-light fa-thumbs-up"></i>
//                 </div>`
//                 console.log(data)
//             }
//             else {
//                 data = await res.text()
//                 document.getElementById('statusMessages').innerHTML =`
//                 <div class="alert alert-warning" role="alert">
//                     ${data}
//                 </div>`
//                 console.log(data)
//             }
//         }
//     }
    
    
//         function validate(element) {
//             let result = false
//             const errorMessage = {
//                 name: "You must enter a valid name",
//                 email: "You must enter a valid email",
//                 message: "You must enter a message",
//             }    

//             switch(element.type) {
//                 case 'text':
//                     result = nameValidator(element.value)
//                     break;
//                 case 'email':
//                     result = emailValidator(element.value)
//                     break;
//             }
    
//             if (result) {
//                 document.getElementById(`${element.id}`).classList.remove('error')
//                 document.getElementById(`${element.id}-error`).innerText = ''
//             }
//             else {
//                 document.getElementById(`${element.id}`).classList.add('error')
//                 document.getElementById(`${element.id}-error`).innerText = errorMessage[element.id]
//             }
            
//             return result  
        
//         }
//   )
// }

// export default FormValidation