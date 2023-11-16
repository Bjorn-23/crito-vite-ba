Project coded By Björn Andersson 2023.

Written from the ground up with the help of a "Crito wire frame", using html, css and javascript in a React environment.

The project is fully responsive and a mobile first approach has been used. It still needs some work in tablet mode but mainly from a graphical design point of view as the user experience is the same. 

I wrote a carousel from a web dev simplified video with only javascript and css, but since it didnt work as intended I refoctored the code to incorporate useState and useEffect instead which lead to a smoother implementation. It makes use of an autoplay feature displaying a new slide every 3 seconds (adjustable from the file), you can go back and forth between three "slides" with previous and next buttons. I used slice with different settings on the articles in the API, its scaleable for future articles but a better method of controlling which articles are showing might be needed. The autoplay function also stops when clicking on a new article to get the full article display in "newsdetails".

The form uses Formik and yup to control the inputs and validation. Error messages is displayed on top of each input field in red text to make sure the user knows how to input correct information. Once all fields are input correctly the user can submit the form, if the server responds with a status code of 200 a message wilol show that the information has been received. The way the form is setup the user cannot currently send the form with information that is invalid, therefore to see the "message not sent" displayed after pressing submit you will have to comment out validation lines in the ContactForm.jsx file.

Dates displayed on articles are taken from articles.published which is an ISO number, it is Parsed and formatted using dateFns and is incorporated into the code via a standalone function called "FormatDate.jsx"



