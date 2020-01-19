let table = document.createElement('TABLE');
let form = document.querySelector('.table-form');


//selects all text input values
const rowsInput = document.querySelector('.rows-input');
const colsInput = document.querySelector('.columns-input')
const tableWidth = document.querySelector('.width-input');
const borderSizeInput = document.querySelector('.border-input'); 
let bodyColorInput = document.querySelector('.body-background__color');

//select all color input values
const tableColorInput = document.querySelector('.table-background__color');
const borderColorInput = document.querySelector('.border-color');
const colorInput = document.querySelector('.font-color');
const headColorInput = document.querySelector('.head-background__color');

//font styling selectors
const fontStyleInput = document.querySelector('.font-type__input');
const fontSizeInput = document.querySelector('.font-size__input');
const fontWeightInput = document.querySelector('.font-weight__input');

//align text selector
const alignTextInput = document.querySelector('.text-align__input');

//border collapse selector
const borderCollapseCheckbox = document.querySelector('.border-collapse__input');

//selectes btn generate and copy code
const generateBtn = document.querySelector('.btn-generate');
const getCodeBtn = document.querySelector('.btn-getcode');

let colText = document.querySelector('.row-label');
let rowText = document.querySelector('.col-label');

let tableRow, tableCol, tableHeader;




//testing elements
const box = document.querySelector('.box');
const color = document.querySelector('.color-input');

form.addEventListener('submit', handleSubmit = (e) => {
    e.preventDefault();
})

generateBtn.addEventListener('click', generateTable = () => {
    table.textContent = "";
    console.log(table)
    //creates headers

    if(!colsInput.value.match(/^[0-9]*$/) || colsInput.value == null) {
        rowText.textContent = 'input a number value';
        rowText.style.color = 'red';
    } else {
        rowText.textContent = 'Number of columns';
        rowText.style.color = 'black';
        for(let i = 0; i < colsInput.value; i++) {
            tableHeader = document.createElement('th');
            tableHeader.textContent = 'Head';
            tableHeader.style.color = 'white';
            table.append(tableHeader);
            changeHeaderBackground();
            setHeaderFonts();
    }
     
    // let headerCount = (Math.round(rowsInput.value / 2));
   

    }

    if(!rowsInput.value.match(/^[0-9]*$/) || rowsInput.value == null) {
        colText.textContent = 'input a number value';
        colText.style.color = 'red';
    } else {
        colText.textContent = 'Number of columns';
        colText.style.color = 'black';
        for(let i = 0; i < rowsInput.value; i++) {
            //creates rows
            tableRow = document.createElement('tr');
            table.append(tableRow);
            document.body.appendChild(table)
            console.log(table);
            //creates columns
            for(let i = 0; i < colsInput.value; i++) {
            tableCol = document.createElement('td');
            tableRow.append(tableCol);
            tableCol.textContent = 'value';
            tableCol.style.padding = '.5rem';
            
            changeBorderProperties();
            changeBodyBackground();
            setFonts();
            testBorderCollapse();
    }
  


        }
    
    }

    changeWidth();
    changeTableBackgroundColor();
    
});



const changeWidth = () => {
    table.style.width = tableWidth.value;
}


const changeTableBackgroundColor = () => {
    table.style.background = tableColorInput.value;
}
const changeBorderProperties = () => {
    tableCol.style.border = `${borderSizeInput.value} solid ${borderColorInput.value}`;
}

const changeBodyBackground = () => {
    tableCol.style.background = bodyColorInput.value
}

const changeHeaderBackground = () => {
    tableHeader.style.background = headColorInput.value;
}


const setHeaderFonts = () => {
    tableHeader.style.fontFamily = fontStyleInput.value;    
    tableHeader.style.fontSize = fontSizeInput.value;
    tableHeader.style.fontWeight = fontWeightInput.value;
    // tableHeader.style.textAlign = alignTextInput.value;
    // tableHeader.style.color = colorInput.value;

}
const setFonts = () => {

    tableCol.style.fontFamily = fontStyleInput.value;
    tableCol.style.fontSize = `${fontSizeInput.value}px`;
    tableCol.style.fontWeight = fontWeightInput.value;
    tableCol.style.textAlign = alignTextInput.value;
    tableCol.style.color = colorInput.value;

}



const testBorderCollapse = () => {
    !borderCollapseCheckbox.checked ? table.style.borderCollapse = "collapse" : tableCol.style.border = '.5rem';

}

getCodeBtn.addEventListener('click', getCode = () => {
    console.log('working');
    let tableValue = table.innerHTML;
    console.log(tableValue);
    let input = document.createElement('input');
    input.value = `<table>${tableValue}</table>`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
})







