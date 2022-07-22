
    let clickTitle = document.querySelector("#formTitle");
    let clickText = document.querySelector("#formText");
    let clickButton = document.querySelector("#formButton");


    clickTitle.addEventListener("click", () => { 
        if (clickTitle.checked == true){

                let cardTitle = document.createElement("h3");
                cardTitle.setAttribute("id","card-title");
                cardTitle.textContent ="Card Title";
                
                let componentShow= document.querySelector("#show-component-div")
                componentShow.appendChild(cardTitle);
        
        }
        else {
            let componentShow= document.querySelector("#show-component-div")
            let removeCardTitle = componentShow.querySelector("#card-title");
            componentShow.removeChild(removeCardTitle);
        }
    
    });
        

    clickText.addEventListener("click", () => { 
        if (clickText.checked == true){

                let cardText = document.createElement("p");
                cardText.setAttribute("id","card-text");
                cardText.textContent ="Some quick example text to build on the card title and make up the bulk of the card's content.";
                
                let componentShowDiv= document.querySelector("#show-component-div")
                componentShowDiv.appendChild(cardText);
        
        }
        else {
            let componentShowDiv= document.querySelector("#show-component-div")
            let removeCardText = componentShowDiv.querySelector("#card-text");
            componentShowDiv.removeChild(removeCardText);
        }
    
    });

    clickButton.addEventListener("click", () => { 
        if (clickButton.checked == true){

                let cardButton = document.createElement("button");
                cardButton.setAttribute("id","card-button");
                cardButton.setAttribute("type","button");
                cardButton.setAttribute("class","btn btn-primary");

                cardButton.textContent ="Button";
                
                let componentShowDiv= document.querySelector("#show-component-div")
                componentShowDiv.appendChild(cardButton);
        
        }
        else {
            let componentShowDiv= document.querySelector("#show-component-div")
            let removeCardButton = componentShowDiv.querySelector("#card-button");
            componentShowDiv.removeChild(removeCardButton);
        }
    
    });
   
    clickImage.addEventListener("click", () => { 
        if (clickImage.checked == true){

                let cardImage = document.createElement("img");
                cardButton.setAttribute("src","");
                cardButton.setAttribute("type","button");
                cardButton.setAttribute("class","btn btn-primary");

                cardButton.textContent ="Button";
                
                let componentShowDiv= document.querySelector("#show-component-div")
                componentShowDiv.appendChild(cardButton);
        
        }
        else {
            let componentShowDiv= document.querySelector("#show-component-div")
            let removeCardButton = componentShowDiv.querySelector("#card-button");
            componentShowDiv.removeChild(removeCardButton);
        }
    
    });
   