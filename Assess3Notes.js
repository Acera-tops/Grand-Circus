// JAVASCRIPT FUNDAMENTALS
    //Accessing and Modifying object properties
        const obj = {
            this: 'that';
            'this-thing': 'that thing';
        };

        const var1 = obj.this; //that
        const var2 = obj['that-thing']; //if it has a dash or space format this way

    //Changing something
        obj.this = "a new thing";

    //Accessing Array Elements
        const stuff = ["a", "b", "c"];
        console.log(stuff[1]); //returns second item in array

    //Adding to end of array
        stuff.push("d");
        console.log(stuff.length); //4

    //Adding to beginning of array
        stuff.unshift("A");
        console.log(stuff.length); //5

    //Adding ot middle of Array
        stuff.splice(1, 0, "a.5"); //at index 1, do not remove anything, add a.5

    //Declaring Function
        function addWord(parameter){
            //code that uses parameter;
            //return parameter;
        };

        //OR CURLY FUNCTION

        const addWord = (word) => {
            //code that uses word;
            //retrun word;
        }

    //Calling Function
        addWord("This");


//DOM FUNDAMENTALS
        //Selecting elements by their tag id or class
            document.querySelectorAll('.component')//returns all
                //good at returning a list or array
                //usually run a for loop to process the list/array

            document.querySelector('#component')//returns first one
                //good for adding a class
                //good for login form

                    // .component = class
                    // #component = ID

        //Add class
            element.classList.add('blue') //<form class="blue">
            element.classList.add('red') //<form class="blue red">

        //Modifying Inner
            element.innerHTML = "<p>Hello</p>"; //actually creates a <p>
            element.innerText = "<p>Hello</p>"; //includes the text with the <p>

        //Change Attributes
            element.setAttribute('id', 'form-1'); //<form id="form-1" class="blue red">
            element.setAttribute('title','Login-Form' ); //<form id="form-1" title = "Login-Form" class="blue red">

        //Add element
            const parent = document.querySelector('#parent'); //<div id="parent"></div>
            parent.append(element);//add to the back
            parent.prepend(element); //add to the front

        //Remove Element
            parent.remove();

        //Changing Elements
            element.style.display = "block";
            element.style.fontSize = "block"; //font-size in CSS turns into camelCase

        //Listeners
            element.addEventListener('click', function(e){
                e.preventDefault(); //dont do what the element automatically does by default
                console.log(e.target); //targets element that was clicked
                element.classList.add('clicked');
            });

        //Add click event to multiple elements
            for (let component of components){
                component.addEventListener('click', function(){
                    console.log('clicked');
                });
            };

        //Processing Forms
            element.addEventListener('submit', function(e){
                const data = new FormData(e.target);//getting data from form
                data.get('username');//relates to name in HTML <input name = "username"/>
                data.get('password'); //relates to name in HTML <input name = "password"/>
        
            });

            //OR

            element.addEventListener('submit', function(e){
                const usernameInput = document.querySelector('#username');
                usernameInput,value; // .value gives you what was typed into the input
            });


