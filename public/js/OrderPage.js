


// function sendEmail() { 
// 	Email.send({ 
// 		Host: "smtp.gmail.com", 
// 		Username: "sender@email_address.com", 
// 		Password: "Enter your password", 
// 		To: 'siddharthmahtur854@gmail.com', 
// 		From: "siddharthmahtur854@gmail.com", 
// 		Subject: "Sending Email using javascript", 
// 		Body: "Well that was easy!!", 
// 		Attachments: [ 
// 		{ 
// 			name: "File_Name_with_Extension", 
// 			path: "Full Path of the file" 
// 		}] 
// 	}) 
// 		.then(function (message) { 
// 		alert("Mail has been sent successfully") 
// 		}); 
// 	} 


const array =["Ravi","Raju","Aakav","Advik","Chaitanya","Chandran","Darsh ","Darpan","Mars"]

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function sendEmail(){
	emailjs.send("service_dkch45r","template_ddyh2hh",{
		to_name:"",
		O_id:"#"+getRandomString(10),
		user_name:"",
		user_address:"",
		user_phone:"",
		Your_Order_details:"",
		Phone_number:""
		})
}