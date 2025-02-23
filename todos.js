let h1Element = document.createElement('h1');
h1Element.textContent = 'ToDos';  
h1Element.style.fontSize = '24px';       // Text size
h1Element.style.color = 'purple';          // Text color
h1Element.style.fontWeight = 'bold';     // Text weight
h1Element.style.textAlign = 'center';    // Center alignment
h1Element.style.marginTop = '20px';      // Spacing from top
h1Element.style.fontFamily = 'Arial, sans-serif'; // Font family
//h1Element.style.backgroundColor = '#f4f4f4'; // Background color
h1Element.style.padding = '10px';        // Padding inside element
h1Element.style.borderRadius = '5px';    // Rounded corners
//h1Element.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)'; // Subtle shadow
document.body.appendChild(h1Element);

let containerElement = document.createElement('div');
containerElement.style.width = '70%'; // Width of container
containerElement.style.margin = '0 auto'; // Center container
containerElement.style.border = '1px solid #ccc'; // Border around container
containerElement.style.borderRadius = '5px'; // Rounded corners
containerElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)'; // Subtle shadow
document.body.appendChild(containerElement);

let pElement = document.createElement('p');
pElement.textContent = 'Add a new ToDo:';
pElement.style.fontSize = '20px';
pElement.style.color = 'purple';
pElement.style.fontWeight = 'bold';
pElement.style.textAlign = 'center';
pElement.style.marginTop = '10px';
containerElement.appendChild(pElement);



let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.style.width = '30%';  
inputElement.style.padding = '10px';
inputElement.style.margin = '10px';
inputElement.style.marginTop = '10px';
inputElement.style.marginLeft = '10px';
inputElement.style.fontSize = '16px';
inputElement.style.border = '1px solid #ccc';
inputElement.style.borderRadius = '5px';
inputElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
containerElement.appendChild(inputElement);

let buttonElement = document.createElement('button');
buttonElement.textContent = 'Add ToDo';
buttonElement.style.width = '10%';
buttonElement.style.padding = '10px';
buttonElement.style.marginTop = '10px';
buttonElement.style.marginLeft = '10px';
buttonElement.style.fontSize = '16px';
buttonElement.style.color = 'white';
buttonElement.style.backgroundColor = 'purple';
buttonElement.style.border = 'none';
buttonElement.style.borderRadius = '5px';
buttonElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
containerElement.appendChild(buttonElement); 

let ulElement = document.createElement('ul');
ulElement.textContent = 'My Tasks:';
ulElement.style.fontSize = '20px';
ulElement.style.color = 'purple';
ulElement.style.fontWeight = 'bold';
ulElement.style.textAlign = 'left';
ulElement.style.margin = '10px';
containerElement.appendChild(ulElement);

function addTask() {
    let inputElementValue = inputElement.value;
    let listcontainerElement = document.createElement('div');
    //listcontainerElement.style.width = '40%'; // Make it full width inside container
    //listcontainerElement.style.minHeight = '50px'; // Ensure it has height
    //listcontainerElement.style.backgroundColor = 'purple';
    listcontainerElement.style.marginTop = '10px'; // Add spacing
    //listcontainerElement.style.borderRadius = '5px'; // Match container styling
    //listcontainerElement.style.margin = '10px';
    listcontainerElement.style.display = 'flex';
    listcontainerElement.style.flexDirection = 'row';
    listcontainerElement.style.alignItems = 'center'; // Align items vertically
    listcontainerElement.style.gap = '10px'; // Add spacing between items
    containerElement.appendChild(listcontainerElement);

    let listElement = document.createElement('li');
    listElement.style.width = '100%'; // Ensure it takes full width
    listElement.style.display = 'flex'; // Needed for child div to align properly
    listElement.style.fontSize = '16px';
    listElement.style.color = 'white';
    listElement.style.padding = '10px';
    listElement.style.margin = '10px'; // Fix margin syntax
    listElement.style.listStyle = 'none'; // Remove default bullet point
    //listElement.textContent = 'My first task';
    listcontainerElement.appendChild(listElement);

    let inputElement2 = document.createElement('input');
    inputElement2.type = 'checkbox';
    inputElement2.id = 'input2';
    // Apply CSS styles using JavaScript
    inputElement2.style.width = '20px';
    inputElement2.style.height = '20px';
    inputElement2.style.marginTop = '12px';
    inputElement2.style.marginRight = '12px';
    listElement.appendChild(inputElement2);

    let containerElement2 = document.createElement('div');
    containerElement2.style.width = '50%';
    containerElement2.style.display = 'flex';
    containerElement2.style.flexDirection = 'row';
    containerElement2.style.alignItems = 'center';
    containerElement2.style.gap = '10px';
    containerElement2.style.backgroundColor = 'purple';
    containerElement2.style.color = 'white';
    containerElement2.style.padding = '10px';
    containerElement2.style.borderRadius = '5px';
    containerElement2.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
    listElement.appendChild(containerElement2);

    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'input2');
    labelElement.textContent = inputElementValue;
    labelElement.style.fontSize = '16px';
    labelElement.style.color = 'white';
    labelElement.style.textDecoration = 'none';
    labelElement.style.fontFamily = 'Arial, sans-serif';
    labelElement.style.cursor = 'pointer';
    containerElement2.appendChild(labelElement);

    let deleteicontainerElement = document.createElement('div');
    deleteicontainerElement.style.marginLeft = 'auto';
    deleteicontainerElement.style.width = '18%';
    deleteicontainerElement.style.textalign = 'right';
    containerElement2.appendChild(deleteicontainerElement); 

    let iconelement = document.createElement('i');
    iconelement.textContent = '🗑️'; // Trash emoji
    //iconelement.className = 'fas fa-trash';
    iconelement.style.fontSize = '20px';
    iconelement.style.color = 'white';
    iconelement.style.cursor = 'pointer';
    deleteicontainerElement.appendChild(iconelement);
    

}    

buttonElement.addEventListener('click', addTask);