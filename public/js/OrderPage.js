




const array =["Ravi","Raju","Aakav","Advik","Chaitanya","Chandran","Darsh ","Darpan","Mars"]

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}



function dynamicdropdown(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status").options[0]=new Option(" Apple","");
            document.getElementById("status").options[1]=new Option("Orange");
            document.getElementById("status").options[2]=new Option("Pear","");
			document.getElementById("status").options[3]=new Option("Banana","");
			document.getElementById("status").options[4]=new Option("Jackfruit","");
			document.getElementById("status").options[5]=new Option("Papaya","");
			document.getElementById("status").options[6]=new Option("Kiwi","");
			document.getElementById("status").options[7]=new Option("Lemon","");
			document.getElementById("status").options[8]=new Option("Avocado","");
            break;
        case "Medicine" :
            document.getElementById("status").options[0]=new Option("Naproxen","");
            document.getElementById("status").options[1]=new Option("Viagra");
            document.getElementById("status").options[2]=new Option("Clonazepam");
            document.getElementById("status").options[3]=new Option("Wellbutrin");
			document.getElementById("status").options[4]=new Option("Xanax","");
			document.getElementById("status").options[5]=new Option("Bunavail","");
			document.getElementById("status").options[6]=new Option("Onpattro","");
			document.getElementById("status").options[7]=new Option("Jardiance","");
			document.getElementById("status").options[8]=new Option("Avocado","");
            break;
		case "Snack and Groceries" :
			document.getElementById("status").options[0]=new Option("Bread","");
            document.getElementById("status").options[1]=new Option("Rice");
            document.getElementById("status").options[2]=new Option("Milk");
            document.getElementById("status").options[3]=new Option("Eggs");
			document.getElementById("status").options[4]=new Option("Cheese","");
			document.getElementById("status").options[5]=new Option("Yogurt","");
			document.getElementById("status").options[6]=new Option("Sugar","");
			document.getElementById("status").options[7]=new Option("Honey","");
			document.getElementById("status").options[8]=new Option("Salt","");
			document.getElementById("status").options[9]=new Option("","");
			document.getElementById("status").options[10]=new Option("","");
			document.getElementById("status").options[11]=new Option("","");
			document.getElementById("status").options[12]=new Option("","");
			document.getElementById("status").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status").options[1]=new Option("NoteBooks");
            document.getElementById("status").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status").options[3]=new Option("Pencil Case");
			document.getElementById("status").options[4]=new Option("Eraser","");
			document.getElementById("status").options[5]=new Option("Pen","");
			document.getElementById("status").options[6]=new Option("Stapler","");
			document.getElementById("status").options[7]=new Option("Pencil","");
			document.getElementById("status").options[8]=new Option(" Scissors","");
			document.getElementById("status").options[9]=new Option("Ruler","");
			document.getElementById("status").options[10]=new Option("Document Holder","");
			document.getElementById("status").options[11]=new Option("Tape","");

			
        }










        return true;
    }






	function dynamicdropdown2(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status2").options[0]=new Option(" Apple","");
            document.getElementById("status2").options[1]=new Option("Orange");
            document.getElementById("status2").options[2]=new Option("Pear","");
			document.getElementById("status2").options[3]=new Option("Banana","");
			document.getElementById("status2").options[4]=new Option("Jackfruit","");
			document.getElementById("status2").options[5]=new Option("Papaya","");
			document.getElementById("status2").options[6]=new Option("Kiwi","");
			document.getElementById("status2").options[7]=new Option("Lemon","");
			document.getElementById("status2").options[8]=new Option("Avocado","");
			document.getElementById("status2").options[9]=new Option("","");
			document.getElementById("status2").options[10]=new Option("","");
			document.getElementById("status2").options[11]=new Option("","");
			document.getElementById("status2").options[12]=new Option("","");
			document.getElementById("status2").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status2").options[0]=new Option("Naproxen","");
            document.getElementById("status2").options[1]=new Option("Viagra");
            document.getElementById("status2").options[2]=new Option("Clonazepam");
            document.getElementById("status2").options[3]=new Option("Wellbutrin");
			document.getElementById("status2").options[4]=new Option("Xanax","");
			document.getElementById("status2").options[5]=new Option("Bunavail","");
			document.getElementById("status2").options[6]=new Option("Onpattro","");
			document.getElementById("status2").options[7]=new Option("Jardiance","");
			document.getElementById("status2").options[8]=new Option("Avocado","");
			document.getElementById("status2").options[9]=new Option("","");
			document.getElementById("status2").options[10]=new Option("","");
			document.getElementById("status2").options[11]=new Option("","");
			document.getElementById("status2").options[12]=new Option("","");
			document.getElementById("status2").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status2").options[0]=new Option("Bread","");
            document.getElementById("status2").options[1]=new Option("Rice");
            document.getElementById("status2").options[2]=new Option("Milk");
            document.getElementById("status2").options[3]=new Option("Eggs");
			document.getElementById("status2").options[4]=new Option("Cheese","");
			document.getElementById("status2").options[5]=new Option("Yogurt","");
			document.getElementById("status2").options[6]=new Option("Sugar","");
			document.getElementById("status2").options[7]=new Option("Honey","");
			document.getElementById("status2").options[8]=new Option("Salt","");
			document.getElementById("status2").options[9]=new Option("","");
			document.getElementById("status2").options[10]=new Option("","");
			document.getElementById("status2").options[11]=new Option("","");
			document.getElementById("status2").options[12]=new Option("","");
			document.getElementById("status2").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status2").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status2").options[1]=new Option("NoteBooks");
            document.getElementById("status2").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status2").options[3]=new Option("Pencil Case");
			document.getElementById("status2").options[4]=new Option("Eraser","");
			document.getElementById("status2").options[5]=new Option("Pen","");
			document.getElementById("status2").options[6]=new Option("Stapler","");
			document.getElementById("status2").options[7]=new Option("Pencil","");
			document.getElementById("status2").options[8]=new Option(" Scissors","");
			document.getElementById("status2").options[9]=new Option("Ruler","");
			document.getElementById("status2").options[10]=new Option("Document Holder","");
			document.getElementById("status2").options[11]=new Option("Tape","");
        }
        return true;
    }



















	function dynamicdropdown3(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status3").options[0]=new Option(" Apple","");
            document.getElementById("status3").options[1]=new Option("Orange");
            document.getElementById("status3").options[2]=new Option("Pear","");
			document.getElementById("status3").options[3]=new Option("Banana","");
			document.getElementById("status3").options[4]=new Option("Jackfruit","");
			document.getElementById("status3").options[5]=new Option("Papaya","");
			document.getElementById("status3").options[6]=new Option("Kiwi","");
			document.getElementById("status3").options[7]=new Option("Lemon","");
			document.getElementById("status3").options[8]=new Option("Avocado","");
			document.getElementById("status3").options[9]=new Option("","");
			document.getElementById("status3").options[10]=new Option("","");
			document.getElementById("status3").options[11]=new Option("","");
			document.getElementById("status3").options[12]=new Option("","");
			document.getElementById("status3").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status3").options[0]=new Option("Naproxen","");
            document.getElementById("status3").options[1]=new Option("Viagra");
            document.getElementById("status3").options[2]=new Option("Clonazepam");
            document.getElementById("status3").options[3]=new Option("Wellbutrin");
			document.getElementById("status3").options[4]=new Option("Xanax","");
			document.getElementById("status3").options[5]=new Option("Bunavail","");
			document.getElementById("status3").options[6]=new Option("Onpattro","");
			document.getElementById("status3").options[7]=new Option("Jardiance","");
			document.getElementById("status3").options[8]=new Option("Avocado","");
			document.getElementById("status3").options[9]=new Option("","");
			document.getElementById("status3").options[10]=new Option("","");
			document.getElementById("status3").options[11]=new Option("","");
			document.getElementById("status3").options[12]=new Option("","");
			document.getElementById("status3").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status3").options[0]=new Option("Bread","");
            document.getElementById("status3").options[1]=new Option("Rice");
            document.getElementById("status3").options[2]=new Option("Milk");
            document.getElementById("status3").options[3]=new Option("Eggs");
			document.getElementById("status3").options[4]=new Option("Cheese","");
			document.getElementById("status3").options[5]=new Option("Yogurt","");
			document.getElementById("status3").options[6]=new Option("Sugar","");
			document.getElementById("status3").options[7]=new Option("Honey","");
			document.getElementById("status3").options[8]=new Option("Salt","");
			document.getElementById("status3").options[9]=new Option("","");
			document.getElementById("status3").options[10]=new Option("","");
			document.getElementById("status3").options[11]=new Option("","");
			document.getElementById("status3").options[12]=new Option("","");
			document.getElementById("status3").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status3").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status3").options[1]=new Option("NoteBooks");
            document.getElementById("status3").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status3").options[3]=new Option("Pencil Case");
			document.getElementById("status3").options[4]=new Option("Eraser","");
			document.getElementById("status3").options[5]=new Option("Pen","");
			document.getElementById("status3").options[6]=new Option("Stapler","");
			document.getElementById("status3").options[7]=new Option("Pencil","");
			document.getElementById("status3").options[8]=new Option(" Scissors","");
			document.getElementById("status3").options[9]=new Option("Ruler","");
			document.getElementById("status3").options[10]=new Option("Document Holder","");
			document.getElementById("status3").options[11]=new Option("Tape","");
        }
        return true;
    }











	function dynamicdropdown4(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status4").options[0]=new Option(" Apple","");
            document.getElementById("status4").options[1]=new Option("Orange");
            document.getElementById("status4").options[2]=new Option("Pear","");
			document.getElementById("status4").options[3]=new Option("Banana","");
			document.getElementById("status4").options[4]=new Option("Jackfruit","");
			document.getElementById("status4").options[5]=new Option("Papaya","");
			document.getElementById("status4").options[6]=new Option("Kiwi","");
			document.getElementById("status4").options[7]=new Option("Lemon","");
			document.getElementById("status4").options[8]=new Option("Avocado","");
			document.getElementById("status4").options[9]=new Option("","");
			document.getElementById("status4").options[10]=new Option("","");
			document.getElementById("status4").options[11]=new Option("","");
			document.getElementById("status4").options[12]=new Option("","");
			document.getElementById("status4").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status4").options[0]=new Option("Naproxen","");
            document.getElementById("status4").options[1]=new Option("Viagra");
            document.getElementById("status4").options[2]=new Option("Clonazepam");
            document.getElementById("status4").options[3]=new Option("Wellbutrin");
			document.getElementById("status4").options[4]=new Option("Xanax","");
			document.getElementById("status4").options[5]=new Option("Bunavail","");
			document.getElementById("status4").options[6]=new Option("Onpattro","");
			document.getElementById("status4").options[7]=new Option("Jardiance","");
			document.getElementById("status4").options[8]=new Option("Avocado","");
			document.getElementById("status4").options[9]=new Option("","");
			document.getElementById("status4").options[10]=new Option("","");
			document.getElementById("status4").options[11]=new Option("","");
			document.getElementById("status4").options[12]=new Option("","");
			document.getElementById("status4").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status4").options[0]=new Option("Bread","");
            document.getElementById("status4").options[1]=new Option("Rice");
            document.getElementById("status4").options[2]=new Option("Milk");
            document.getElementById("status4").options[3]=new Option("Eggs");
			document.getElementById("status4").options[4]=new Option("Cheese","");
			document.getElementById("status4").options[5]=new Option("Yogurt","");
			document.getElementById("status4").options[6]=new Option("Sugar","");
			document.getElementById("status4").options[7]=new Option("Honey","");
			document.getElementById("status4").options[8]=new Option("Salt","");
			document.getElementById("status4").options[9]=new Option("","");
			document.getElementById("status4").options[10]=new Option("","");
			document.getElementById("status4").options[11]=new Option("","");
			document.getElementById("status4").options[12]=new Option("","");
			document.getElementById("status4").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status4").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status4").options[1]=new Option("NoteBooks");
            document.getElementById("status4").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status4").options[3]=new Option("Pencil Case");
			document.getElementById("status4").options[4]=new Option("Eraser","");
			document.getElementById("status4").options[5]=new Option("Pen","");
			document.getElementById("status4").options[6]=new Option("Stapler","");
			document.getElementById("status4").options[7]=new Option("Pencil","");
			document.getElementById("status4").options[8]=new Option(" Scissors","");
			document.getElementById("status4").options[9]=new Option("Ruler","");
			document.getElementById("status4").options[10]=new Option("Document Holder","");
			document.getElementById("status4").options[11]=new Option("Tape","");
        }
        return true;
    }







	function dynamicdropdown5(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status5").options[0]=new Option(" Apple","");
            document.getElementById("status5").options[1]=new Option("Orange");
            document.getElementById("status5").options[2]=new Option("Pear","");
			document.getElementById("status5").options[3]=new Option("Banana","");
			document.getElementById("status5").options[4]=new Option("Jackfruit","");
			document.getElementById("status5").options[5]=new Option("Papaya","");
			document.getElementById("status5").options[6]=new Option("Kiwi","");
			document.getElementById("status5").options[7]=new Option("Lemon","");
			document.getElementById("status5").options[8]=new Option("Avocado","");
			document.getElementById("status5").options[9]=new Option("","");
			document.getElementById("status5").options[10]=new Option("","");
			document.getElementById("status5").options[11]=new Option("","");
			document.getElementById("status5").options[12]=new Option("","");
			document.getElementById("status5").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status5").options[0]=new Option("Naproxen","");
            document.getElementById("status5").options[1]=new Option("Viagra");
            document.getElementById("status5").options[2]=new Option("Clonazepam");
            document.getElementById("status5").options[3]=new Option("Wellbutrin");
			document.getElementById("status5").options[4]=new Option("Xanax","");
			document.getElementById("status5").options[5]=new Option("Bunavail","");
			document.getElementById("status5").options[6]=new Option("Onpattro","");
			document.getElementById("status5").options[7]=new Option("Jardiance","");
			document.getElementById("status5").options[8]=new Option("Avocado","");
			document.getElementById("status5").options[9]=new Option("","");
			document.getElementById("status5").options[10]=new Option("","");
			document.getElementById("status5").options[11]=new Option("","");
			document.getElementById("status5").options[12]=new Option("","");
			document.getElementById("status5").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status5").options[0]=new Option("Bread","");
            document.getElementById("status5").options[1]=new Option("Rice");
            document.getElementById("status5").options[2]=new Option("Milk");
            document.getElementById("status5").options[3]=new Option("Eggs");
			document.getElementById("status5").options[4]=new Option("Cheese","");
			document.getElementById("status5").options[5]=new Option("Yogurt","");
			document.getElementById("status5").options[6]=new Option("Sugar","");
			document.getElementById("status5").options[7]=new Option("Honey","");
			document.getElementById("status5").options[8]=new Option("Salt","");
			document.getElementById("status5").options[9]=new Option("","");
			document.getElementById("status5").options[10]=new Option("","");
			document.getElementById("status5").options[11]=new Option("","");
			document.getElementById("status5").options[12]=new Option("","");
			document.getElementById("status5").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status5").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status5").options[1]=new Option("NoteBooks");
            document.getElementById("status5").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status5").options[3]=new Option("Pencil Case");
			document.getElementById("status5").options[4]=new Option("Eraser","");
			document.getElementById("status5").options[5]=new Option("Pen","");
			document.getElementById("status5").options[6]=new Option("Stapler","");
			document.getElementById("status5").options[7]=new Option("Pencil","");
			document.getElementById("status5").options[8]=new Option(" Scissors","");
			document.getElementById("status5").options[9]=new Option("Ruler","");
			document.getElementById("status5").options[10]=new Option("Document Holder","");
			document.getElementById("status5").options[11]=new Option("Tape","");
        }
        return true;
    }








	function dynamicdropdown6(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status6").options[0]=new Option(" Apple","");
            document.getElementById("status6").options[1]=new Option("Orange");
            document.getElementById("status6").options[2]=new Option("Pear","");
			document.getElementById("status6").options[3]=new Option("Banana","");
			document.getElementById("status6").options[4]=new Option("Jackfruit","");
			document.getElementById("status6").options[5]=new Option("Papaya","");
			document.getElementById("status6").options[6]=new Option("Kiwi","");
			document.getElementById("status6").options[7]=new Option("Lemon","");
			document.getElementById("status6").options[8]=new Option("Avocado","");
			document.getElementById("status6").options[9]=new Option("","");
			document.getElementById("status6").options[10]=new Option("","");
			document.getElementById("status6").options[11]=new Option("","");
			document.getElementById("status6").options[12]=new Option("","");
			document.getElementById("status6").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status6").options[0]=new Option("Naproxen","");
            document.getElementById("status6").options[1]=new Option("Viagra");
            document.getElementById("status6").options[2]=new Option("Clonazepam");
            document.getElementById("status6").options[3]=new Option("Wellbutrin");
			document.getElementById("status6").options[4]=new Option("Xanax","");
			document.getElementById("status6").options[5]=new Option("Bunavail","");
			document.getElementById("status6").options[6]=new Option("Onpattro","");
			document.getElementById("status6").options[7]=new Option("Jardiance","");
			document.getElementById("status6").options[8]=new Option("Avocado","");
			document.getElementById("status6").options[9]=new Option("","");
			document.getElementById("status6").options[10]=new Option("","");
			document.getElementById("status6").options[11]=new Option("","");
			document.getElementById("status6").options[12]=new Option("","");
			document.getElementById("status6").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status6").options[0]=new Option("Bread","");
            document.getElementById("status6").options[1]=new Option("Rice");
            document.getElementById("status6").options[2]=new Option("Milk");
            document.getElementById("status6").options[3]=new Option("Eggs");
			document.getElementById("status6").options[4]=new Option("Cheese","");
			document.getElementById("status6").options[5]=new Option("Yogurt","");
			document.getElementById("status6").options[6]=new Option("Sugar","");
			document.getElementById("status6").options[7]=new Option("Honey","");
			document.getElementById("status6").options[8]=new Option("Salt","");
			document.getElementById("status6").options[9]=new Option("","");
			document.getElementById("status6").options[10]=new Option("","");
			document.getElementById("status6").options[11]=new Option("","");
			document.getElementById("status6").options[12]=new Option("","");
			document.getElementById("status6").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status6").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status6").options[1]=new Option("NoteBooks");
            document.getElementById("status6").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status6").options[3]=new Option("Pencil Case");
			document.getElementById("status6").options[4]=new Option("Eraser","");
			document.getElementById("status6").options[5]=new Option("Pen","");
			document.getElementById("status6").options[6]=new Option("Stapler","");
			document.getElementById("status6").options[7]=new Option("Pencil","");
			document.getElementById("status6").options[8]=new Option(" Scissors","");
			document.getElementById("status6").options[9]=new Option("Ruler","");
			document.getElementById("status6").options[10]=new Option("Document Holder","");
			document.getElementById("status6").options[11]=new Option("Tape","");
        }
        return true;
    }



	function dynamicdropdown7(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status7").options[0]=new Option(" Apple","");
            document.getElementById("status7").options[1]=new Option("Orange");
            document.getElementById("status7").options[2]=new Option("Pear","");
			document.getElementById("status7").options[3]=new Option("Banana","");
			document.getElementById("status7").options[4]=new Option("Jackfruit","");
			document.getElementById("status7").options[5]=new Option("Papaya","");
			document.getElementById("status7").options[6]=new Option("Kiwi","");
			document.getElementById("status7").options[7]=new Option("Lemon","");
			document.getElementById("status7").options[8]=new Option("Avocado","");
			document.getElementById("status7").options[9]=new Option("","");
			document.getElementById("status7").options[10]=new Option("","");
			document.getElementById("status7").options[11]=new Option("","");
			document.getElementById("status7").options[12]=new Option("","");
			document.getElementById("status7").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status7").options[0]=new Option("Naproxen","");
            document.getElementById("status7").options[1]=new Option("Viagra");
            document.getElementById("status7").options[2]=new Option("Clonazepam");
            document.getElementById("status7").options[3]=new Option("Wellbutrin");
			document.getElementById("status7").options[4]=new Option("Xanax","");
			document.getElementById("status7").options[5]=new Option("Bunavail","");
			document.getElementById("status7").options[6]=new Option("Onpattro","");
			document.getElementById("status7").options[7]=new Option("Jardiance","");
			document.getElementById("status7").options[8]=new Option("Avocado","");
			document.getElementById("status7").options[9]=new Option("","");
			document.getElementById("status7").options[10]=new Option("","");
			document.getElementById("status7").options[11]=new Option("","");
			document.getElementById("status7").options[12]=new Option("","");
			document.getElementById("status7").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status7").options[0]=new Option("Bread","");
            document.getElementById("status7").options[1]=new Option("Rice");
            document.getElementById("status7").options[2]=new Option("Milk");
            document.getElementById("status7").options[3]=new Option("Eggs");
			document.getElementById("status7").options[4]=new Option("Cheese","");
			document.getElementById("status7").options[5]=new Option("Yogurt","");
			document.getElementById("status7").options[6]=new Option("Sugar","");
			document.getElementById("status7").options[7]=new Option("Honey","");
			document.getElementById("status7").options[8]=new Option("Salt","");
			document.getElementById("status7").options[9]=new Option("","");
			document.getElementById("status7").options[10]=new Option("","");
			document.getElementById("status7").options[11]=new Option("","");
			document.getElementById("status7").options[12]=new Option("","");
			document.getElementById("status7").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status7").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status7").options[1]=new Option("NoteBooks");
            document.getElementById("status7").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status7").options[3]=new Option("Pencil Case");
			document.getElementById("status7").options[4]=new Option("Eraser","");
			document.getElementById("status7").options[5]=new Option("Pen","");
			document.getElementById("status7").options[6]=new Option("Stapler","");
			document.getElementById("status7").options[7]=new Option("Pencil","");
			document.getElementById("status7").options[8]=new Option(" Scissors","");
			document.getElementById("status7").options[9]=new Option("Ruler","");
			document.getElementById("status7").options[10]=new Option("Document Holder","");
			document.getElementById("status7").options[11]=new Option("Tape","");
        }
        return true;
    }






	function dynamicdropdown8(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status8").options[0]=new Option(" Apple","");
            document.getElementById("status8").options[1]=new Option("Orange");
            document.getElementById("status8").options[2]=new Option("Pear","");
			document.getElementById("status8").options[3]=new Option("Banana","");
			document.getElementById("status8").options[4]=new Option("Jackfruit","");
			document.getElementById("status8").options[5]=new Option("Papaya","");
			document.getElementById("status8").options[6]=new Option("Kiwi","");
			document.getElementById("status8").options[7]=new Option("Lemon","");
			document.getElementById("status8").options[8]=new Option("Avocado","");
			document.getElementById("status8").options[9]=new Option("","");
			document.getElementById("status8").options[10]=new Option("","");
			document.getElementById("status8").options[11]=new Option("","");
			document.getElementById("status8").options[12]=new Option("","");
			document.getElementById("status8").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status8").options[0]=new Option("Naproxen","");
            document.getElementById("status8").options[1]=new Option("Viagra");
            document.getElementById("status8").options[2]=new Option("Clonazepam");
            document.getElementById("status8").options[3]=new Option("Wellbutrin");
			document.getElementById("status8").options[4]=new Option("Xanax","");
			document.getElementById("status8").options[5]=new Option("Bunavail","");
			document.getElementById("status8").options[6]=new Option("Onpattro","");
			document.getElementById("status8").options[7]=new Option("Jardiance","");
			document.getElementById("status8").options[8]=new Option("Avocado","");
			document.getElementById("status8").options[9]=new Option("","");
			document.getElementById("status8").options[10]=new Option("","");
			document.getElementById("status8").options[11]=new Option("","");
			document.getElementById("status8").options[12]=new Option("","");
			document.getElementById("status8").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status8").options[0]=new Option("Bread","");
            document.getElementById("status8").options[1]=new Option("Rice");
            document.getElementById("status8").options[2]=new Option("Milk");
            document.getElementById("status8").options[3]=new Option("Eggs");
			document.getElementById("status8").options[4]=new Option("Cheese","");
			document.getElementById("status8").options[5]=new Option("Yogurt","");
			document.getElementById("status8").options[6]=new Option("Sugar","");
			document.getElementById("status8").options[7]=new Option("Honey","");
			document.getElementById("status8").options[8]=new Option("Salt","");
			document.getElementById("status8").options[9]=new Option("","");
			document.getElementById("status8").options[10]=new Option("","");
			document.getElementById("status8").options[11]=new Option("","");
			document.getElementById("status8").options[12]=new Option("","");
			document.getElementById("status8").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status8").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status8").options[1]=new Option("NoteBooks");
            document.getElementById("status8").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status8").options[3]=new Option("Pencil Case");
			document.getElementById("status8").options[4]=new Option("Eraser","");
			document.getElementById("status8").options[5]=new Option("Pen","");
			document.getElementById("status8").options[6]=new Option("Stapler","");
			document.getElementById("status8").options[7]=new Option("Pencil","");
			document.getElementById("status8").options[8]=new Option(" Scissors","");
			document.getElementById("status8").options[9]=new Option("Ruler","");
			document.getElementById("status8").options[10]=new Option("Document Holder","");
			document.getElementById("status8").options[11]=new Option("Tape","");
        }
        return true;
    }














	function dynamicdropdown9(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status9").options[0]=new Option(" Apple","");
            document.getElementById("status9").options[1]=new Option("Orange");
            document.getElementById("status9").options[2]=new Option("Pear","");
			document.getElementById("status9").options[3]=new Option("Banana","");
			document.getElementById("status9").options[4]=new Option("Jackfruit","");
			document.getElementById("status9").options[5]=new Option("Papaya","");
			document.getElementById("status9").options[6]=new Option("Kiwi","");
			document.getElementById("status9").options[7]=new Option("Lemon","");
			document.getElementById("status9").options[8]=new Option("Avocado","");
			document.getElementById("status9").options[9]=new Option("","");
			document.getElementById("status9").options[10]=new Option("","");
			document.getElementById("status9").options[11]=new Option("","");
			document.getElementById("status9").options[12]=new Option("","");
			document.getElementById("status9").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status9").options[0]=new Option("Naproxen","");
            document.getElementById("status9").options[1]=new Option("Viagra");
            document.getElementById("status9").options[2]=new Option("Clonazepam");
            document.getElementById("status9").options[3]=new Option("Wellbutrin");
			document.getElementById("status9").options[4]=new Option("Xanax","");
			document.getElementById("status9").options[5]=new Option("Bunavail","");
			document.getElementById("status9").options[6]=new Option("Onpattro","");
			document.getElementById("status9").options[7]=new Option("Jardiance","");
			document.getElementById("status9").options[8]=new Option("Avocado","");
			document.getElementById("status9").options[9]=new Option("","");
			document.getElementById("status9").options[10]=new Option("","");
			document.getElementById("status9").options[11]=new Option("","");
			document.getElementById("status9").options[12]=new Option("","");
			document.getElementById("status9").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status9").options[0]=new Option("Bread","");
            document.getElementById("status9").options[1]=new Option("Rice");
            document.getElementById("status9").options[2]=new Option("Milk");
            document.getElementById("status9").options[3]=new Option("Eggs");
			document.getElementById("status9").options[4]=new Option("Cheese","");
			document.getElementById("status9").options[5]=new Option("Yogurt","");
			document.getElementById("status9").options[6]=new Option("Sugar","");
			document.getElementById("status9").options[7]=new Option("Honey","");
			document.getElementById("status9").options[8]=new Option("Salt","");
			document.getElementById("status9").options[9]=new Option("","");
			document.getElementById("status9").options[10]=new Option("","");
			document.getElementById("status9").options[11]=new Option("","");
			document.getElementById("status9").options[12]=new Option("","");
			document.getElementById("status9").options[13]=new Option("","");
			break;

		case "Stationary" :
			document.getElementById("status9").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status9").options[1]=new Option("NoteBooks");
            document.getElementById("status9").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status9").options[3]=new Option("Pencil Case");
			document.getElementById("status9").options[4]=new Option("Eraser","");
			document.getElementById("status9").options[5]=new Option("Pen","");
			document.getElementById("status9").options[6]=new Option("Stapler","");
			document.getElementById("status9").options[7]=new Option("Pencil","");
			document.getElementById("status9").options[8]=new Option(" Scissors","");
			document.getElementById("status9").options[9]=new Option("Ruler","");
			document.getElementById("status9").options[10]=new Option("Document Holder","");
			document.getElementById("status9").options[11]=new Option("Tape","");
        }
        return true;
    }










	function dynamicdropdown10(listindex)
    {
        switch (listindex)
        {
        case "Fruits and Vegtable" :
            document.getElementById("status10").options[0]=new Option(" Apple","");
            document.getElementById("status10").options[1]=new Option("Orange");
            document.getElementById("status10").options[2]=new Option("Pear","");
			document.getElementById("status10").options[3]=new Option("Banana","");
			document.getElementById("status10").options[4]=new Option("Jackfruit","");
			document.getElementById("status10").options[5]=new Option("Papaya","");
			document.getElementById("status10").options[6]=new Option("Kiwi","");
			document.getElementById("status10").options[7]=new Option("Lemon","");
			document.getElementById("status10").options[8]=new Option("Avocado","");
			document.getElementById("status10").options[9]=new Option("","");
			document.getElementById("status10").options[10]=new Option("","");
			document.getElementById("status10").options[11]=new Option("","");
			document.getElementById("status10").options[12]=new Option("","");
			document.getElementById("status10").options[13]=new Option("","");
            break;
        case "Medicine" :
            document.getElementById("status10").options[0]=new Option("Naproxen","");
            document.getElementById("status10").options[1]=new Option("Viagra");
            document.getElementById("status10").options[2]=new Option("Clonazepam");
            document.getElementById("status10").options[3]=new Option("Wellbutrin");
			document.getElementById("status10").options[4]=new Option("Xanax","");
			document.getElementById("status10").options[5]=new Option("Bunavail","");
			document.getElementById("status10").options[6]=new Option("Onpattro","");
			document.getElementById("status10").options[7]=new Option("Jardiance","");
			document.getElementById("status10").options[8]=new Option("Avocado","");
			document.getElementById("status10").options[9]=new Option("","");
			document.getElementById("status10").options[10]=new Option("","");
			document.getElementById("status10").options[11]=new Option("","");
			document.getElementById("status10").options[12]=new Option("","");
			document.getElementById("status10").options[13]=new Option("","");
            break;

		case "Snack and Groceries" :
			document.getElementById("status10").options[0]=new Option("Bread","");
            document.getElementById("status10").options[1]=new Option("Rice");
            document.getElementById("status10").options[2]=new Option("Milk");
            document.getElementById("status10").options[3]=new Option("Eggs");
			document.getElementById("status10").options[4]=new Option("Cheese","");
			document.getElementById("status10").options[5]=new Option("Yogurt","");
			document.getElementById("status10").options[6]=new Option("Sugar","");
			document.getElementById("status10").options[7]=new Option("Honey","");
			document.getElementById("status10").options[8]=new Option("Salt","");
			document.getElementById("status10").options[9]=new Option("","");
			document.getElementById("status10").options[10]=new Option("","");
			document.getElementById("status10").options[11]=new Option("","");
			document.getElementById("status10").options[12]=new Option("","");
			document.getElementById("status10").options[13]=new Option("","");
			break;
		case "Stationary" :

			document.getElementById("status10").options[1]=new Option("NoteBooks");
			document.getElementById("status10").options[0]=new Option("Highlighter Pen ","");
            document.getElementById("status10").options[2]=new Option("Pencil Sharpener");
            document.getElementById("status10").options[3]=new Option("Pencil Case");
			document.getElementById("status10").options[4]=new Option("Eraser","");
			document.getElementById("status10").options[5]=new Option("Pen","");
			document.getElementById("status10").options[6]=new Option("Stapler","");
			document.getElementById("status10").options[7]=new Option("Pencil","");
			document.getElementById("status10").options[8]=new Option(" Scissors","");
			document.getElementById("status10").options[9]=new Option("Ruler","");
			document.getElementById("status10").options[10]=new Option("Document Holder","");
			document.getElementById("status10").options[11]=new Option("Tape","");
        }
        return true;
    }









function sendEmail(){
	emailjs.send("service_dkch45r","template_ddyh2hh",{
		to_person_email:document.querySelector(".userEmail").value,
		to_name:array[4],
		O_id:"#"+getRandomString(20),
		user_name:document.querySelector(".username").value,
		user_address:document.querySelector(".useraddress").value,
		user_phone:document.querySelector(".userphone").value,
		Fruits:document.getElementById("status").value,
		Phone_number:Math.floor(Math.random() * 9000000000) + 1000000000
		})
}