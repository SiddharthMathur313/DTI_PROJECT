




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
		to_person_email:"siddharthmathur854@gmail.com",
		to_name:array[4],
		O_id:"#"+getRandomString(10),
		user_name:"akshat",
		user_address:"513 navniiti apts , 51 ip extenions,ip 51 ",
		user_phone:"674351290872",
		Fruits:"1kg-Apple washington 1kg-Guava 1kg-Jackfruit",
		Medicine:"Vit E:100 mg  Vit E:600mg  Amodiaquine:200 mg  Betamethasone Sodium Phosphate:0.5 mg",
		snack_Groceries:"1kg pencils and 2kg snack",
		Phone_number:Math.floor(Math.random() * 9000000000) + 1000000000
		})
}