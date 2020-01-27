let form = document.querySelector('.table-form');
let tableContainer = document.querySelector('.table-container');

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

const copyWrapper = document.querySelector('.copy-wrapper');
let tableRow, tableCol, tableHeader;

//testing elements
const color = document.querySelector('.color-input');

//prevent the page to refresh on submit
form.addEventListener('submit', handleSubmit = (e) => {
    e.preventDefault();
});

const createNode = (e) => {
    return document.createElement(e);
};

const append = (parent, el) => {
    return parent.appendChild(el)
};

let table = createNode('table');
    input = createNode('textarea');
    copyBtn = createNode('button');


generateBtn.addEventListener('click', generateTable = () => {
    table.textContent = "";
    input.remove();
    copyBtn.remove();

    //if statement for colums with regex
    if(!colsInput.value.match(/^[0-9]*$/) || colsInput.value < 1) {
        rowText.textContent = 'input a number value';
        rowText.style.color = 'red';
    } else {
        rowText.textContent = 'Number of rows';
        rowText.style.color = 'white';
        for(let i = 0; i < colsInput.value; i++) {
            //function to create headers. headers are created based on cols input value
            createHeaders();
    }     
}
    //if statement for rows with regex
    if(!rowsInput.value.match(/^[0-9]*$/) || rowsInput.value < 1) {
        colText.textContent = 'input a number value';
        colText.style.color = 'red';
    } else {
        colText.textContent = 'Number of columns';
        colText.style.color = 'white';
        for(let i = 0; i < rowsInput.value; i++) {
            //creates rows function
            createRows();
            
            //creates columns
            for(let i = 0; i < colsInput.value; i++) {
            createColums();
           
            //set table properties functions
            changeBorderProperties();
            changeBodyBackground();
            setFonts();
            alignText();
            // alignTextInput.addEventListener('click', () => setFonts());
    }

        }
        tableContainer.append(table);
    
    }

    changeTableBackgroundColor();

});


const createHeaders = () => {
    tableHeader = createNode('th');
    tableHeader.textContent = 'Head';
    tableHeader.style.color = 'white';
    append(table, tableHeader);
    changeHeaderBackground();
    headColorInput.addEventListener('click', () => changeHeaderBackground());
    setFonts();

};

const createRows = () => {
    tableRow = createNode('tr');
    append(table, tableRow);
};

const createColums = () => {
    tableCol = createNode('td');
    append(tableRow, tableCol);
    tableCol.textContent = 'value';
    tableCol.style.padding = '.5rem';
    tableCol.style.border = `1px solid ${borderColorInput.value}`
}

tableWidth.addEventListener('keydown', () => {
    changeWidth();
})

//set properties functions, width, background colors
const changeWidth = () => {
    table.style.width = `${tableWidth.value*1}%`;
}

const changeTableBackgroundColor = () => {
    table.style.background = tableColorInput.value;
}
const changeBorderProperties = () => {
    tableCol.style.border = `${borderSizeInput.value}px solid ${borderColorInput.value}`;
    table.style.border = `${borderSizeInput.value}px solid ${borderColorInput.value}`;

}

const changeBodyBackground = () => {
    tableCol.style.background = bodyColorInput.value;
}

const changeHeaderBackground = () => {
    tableHeader.style.background = headColorInput.value;
}

//setting font functions 

const setFonts = () => {

    table.style.fontFamily = fontStyleInput.value;
    table.style.fontSize = `${fontSizeInput.value}px`;
    table.style.fontWeight = fontWeightInput.value;
    table.style.color = colorInput.value;

}

const alignText = () => {
    tableCol.style.textAlign = alignTextInput.value;

}

//table collapse
table.style.borderCollapse = "collapse";
borderCollapseCheckbox.addEventListener('change', borderCollapse = () => {
    borderCollapseCheckbox.checked ? table.style.borderCollapse = "collapse" : table.style.borderCollapse = 'separate';

})

//generates the html table code and copies it
getCodeBtn.addEventListener('click', getCode = () => {
    let tableValue = tableContainer.innerHTML;
    console.log(tableValue);
    table.remove();
    input.value = tableValue;
    input.style.width = '100%'
    input.style.height = '25rem'
    table.innerHTML = input.value;
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('class', 'copy-btn');
    append(tableContainer, input);
    append(copyWrapper, copyBtn);

        copyBtn.addEventListener('click', copyCode = () => {
        input.select();
        document.execCommand("copy");
        copyBtn.textContent = 'Copied!';
    })

    
})









