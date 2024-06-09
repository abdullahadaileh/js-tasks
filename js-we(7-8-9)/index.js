// task 1


const button = document.getElementById('btn');
button.addEventListener('click', function() 
    {
        alert('ok');
    }
);

// task 2

document.getElementById("btn2").addEventListener("click", function() 
    {
        document.getElementById("pp1").textContent = "welcom to js";
    }
);

// task 3

document.getElementById("div1").addEventListener("dblclick", function() 
    {
        this.style.backgroundColor = "lightgreen";
    }
);

// task 4


document.getElementById("hdiv").addEventListener("mouseenter", function() 
    {
        this.textContent = "Text";
    }
);
 


const form = document.getElementById("formm");

const nameInput = document.getElementById("name");


// task 5

form.addEventListener("submit", function(event)
    {
        event.preventDefault();  
        alert("sent");
    }
);

// task 6

nameInput.addEventListener("blur", function() 
    {
        this.style.borderColor = "black"; 
    }
);


