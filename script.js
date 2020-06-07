$(document).ready(function(){

    //link to the file to retrieve the data which is dtored in json format
    $.getJSON("http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", function(json)
    {
        //printing the json file in console section to check the fetching of the json data
        console.log(json);
        //running the loop 3 times as the file contains data for 3 employees
        //later we can make it scalable so that it can retrieve data from more than 'n' number of employees
        for(var i=1; i <=3; i++){
            
            //accessing image using the createElement Dom Method for the dynamiccreation of HTML elements
            var x = document.createElement("IMG");
            //link to access the picture for each employee
            x.setAttribute("src", "http://sandbox.bittsdevelopment.com/code1/employeepics/"+i+".jpg");
            //setting the dimensions for the picture
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Image");
            document.getElementById("picture" +i).append(x);

            //accessing the firstname of the ith employee
            var fname = json[i].employeefname;
            //accessing the lastname of the ith employee
            var lname = json[i].employeelname;
            //combining the first and last name to print the complete name of the employee
            document.getElementById("name"+i).innerHTML = fname + " " + lname;
            //accessing the bio of the employee
            var bio = json[i].employeebio;
            document.getElementById("bio"+i).innerHTML = bio;

            //accessing the roles
            for(var j=0; j<json[i].roles.length;j++){
                var role = json[i].roles[j].rolename;

                //creating a button to wrap the role content inside it to an appearance
                var btn = document.createElement("BUTTON");   
                btn.innerHTML +=role;               
                document.getElementById("but"+i).append(btn);
            }

            //accessing the crown image for the employee which is featured by the usage of createElement HTML DOM method for the
            //dynamic creation of HTML element
            var featured = json[i].employeeisfeatured;
            if(featured === "1"){
                //accessing image
                var y = document.createElement("img");
                //setting the src for the crown image
                y.setAttribute("src", "crown.jpg");
                //setting the dimensions for the crown
                y.setAttribute("width", "50");
                y.setAttribute("height", "50");
                y.setAttribute("alt", "crown");
                document.getElementById("crown"+i).append(y);  
            }
        }  
    });
});





