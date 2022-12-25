const containerDiv = document.createElement('div');
containerDiv.className = 'container text-center justify-content-md-center';
document.body.appendChild(containerDiv);

    const visibleContainerDiv = document.createElement('div');
    visibleContainerDiv.className = 'row border border-dark border-2 p-4 m-1 justify-content-evenly';
    containerDiv.appendChild(visibleContainerDiv);

    const h1Element = document.createElement('h1');
    h1Element.id = 'title';
    h1Element.innerHTML = 'Calculator';
    visibleContainerDiv.appendChild(h1Element);

    const calculatorBody = document.createElement('div');
    calculatorBody.className = 'row border border-dark border-2 p-1 m-5 justify-content-center';
    calculatorBody.style.cssText = 'max-width: 400px; min-height: 500px';
    visibleContainerDiv.appendChild(calculatorBody);

        const calculatorScreen = document.createElement('div');
        calculatorScreen.className = 'row mt-3 mb-1 ms-1 me-1 justify-content-center';
        calculatorBody.appendChild(calculatorScreen);

        const inputDiv = document.createElement('input');
        inputDiv.className = 'calculator-screen form-control text-end fs-2';
        inputDiv.id = "result";
        inputDiv.style.cssText = 'min-height: 50px;';
        calculatorScreen.appendChild(inputDiv);

        const row1Div = document.createElement('div');
        row1Div.className = 'row g-2 justify-content-center'
        calculatorScreen.appendChild(row1Div);

            const allClear = document.createElement('button');
            allClear.setAttribute('type', 'button');
            allClear.setAttribute('value', 'AC');
            allClear.id = 'clear';
            allClear.className = "all-clear btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row1Div.appendChild(allClear);

                const allClearBtnSpan = document.createElement('span');
                allClearBtnSpan.style.cssText = 'color: red;';
                allClearBtnSpan.innerText = 'C';
                allClear.appendChild(allClearBtnSpan)

            const backSpace = document.createElement('button');
            backSpace.setAttribute('type', 'button');
            backSpace.setAttribute('value', 'back-space');
            backSpace.id = 'back-space';
            backSpace.className = "back-space btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row1Div.appendChild(backSpace);
    
                const backSpaceBtnSpan = document.createElement('span');
                backSpaceBtnSpan.innerText = '←';
                backSpace.appendChild(backSpaceBtnSpan)

            const decimalKey = document.createElement('button');
            decimalKey.setAttribute('type', 'button');
            decimalKey.setAttribute('value', '.');
            decimalKey.id = '.';
            decimalKey.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row1Div.appendChild(decimalKey);
        
                const decimalKeySpan = document.createElement('span');
                decimalKeySpan.innerText = '.';
                decimalKey.appendChild(decimalKeySpan)

            const multiplyKey = document.createElement('button');
            multiplyKey.setAttribute('type', 'button');
            multiplyKey.setAttribute('value', '*');
            multiplyKey.id = '*';
            multiplyKey.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row1Div.appendChild(multiplyKey);
            
                const multiplyKeyBtnSpan = document.createElement('span');
                multiplyKeyBtnSpan.style.cssText = 'color: #532ff3';
                multiplyKeyBtnSpan.innerText = '×';
                multiplyKey.appendChild(multiplyKeyBtnSpan)

        const row2Div = document.createElement('div');
        row2Div.className = 'row g-2 justify-content-center'
        calculatorScreen.appendChild(row2Div);
        
            const numKey7 = document.createElement('button');
            numKey7.setAttribute('type', 'button');
            numKey7.setAttribute('value', '7');
            numKey7.id = '7';
            numKey7.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row2Div.appendChild(numKey7);
        
                const numKey7BtnSpan = document.createElement('span');
                numKey7BtnSpan.innerText = '7';
                numKey7.appendChild(numKey7BtnSpan)
        
            const numKey8 = document.createElement('button');
            numKey8.setAttribute('type', 'button');
            numKey8.setAttribute('value', '8');
            numKey8.id = '8';
            numKey8.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row2Div.appendChild(numKey8);
            
                const numKey8BtnSpan = document.createElement('span');
                numKey8BtnSpan.innerText = '8';
                numKey8.appendChild(numKey8BtnSpan)
        
            const numKey9 = document.createElement('button');
            numKey9.setAttribute('type', 'button');
            numKey9.setAttribute('value', '9');
            numKey9.id = '9';
            numKey9.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row2Div.appendChild(numKey9);
                
                const numKey9Span = document.createElement('span');
                numKey9Span.innerText = '9';
                numKey9.appendChild(numKey9Span)
        
            const divisionKey = document.createElement('button');
            divisionKey.setAttribute('type', 'button');
            divisionKey.setAttribute('value', '/');
            divisionKey.id = '/';
            divisionKey.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row2Div.appendChild(divisionKey);
                    
                const divisionKeyBtnSpan = document.createElement('span');
                divisionKeyBtnSpan.style.cssText = 'color: #532ff3';
                divisionKeyBtnSpan.innerText = '/';
                divisionKey.appendChild(divisionKeyBtnSpan)

        const row3Div = document.createElement('div');
        row3Div.className = 'row g-2 justify-content-center'
        calculatorScreen.appendChild(row3Div);
        
            const numKey4 = document.createElement('button');
            numKey4.setAttribute('type', 'button');
            numKey4.setAttribute('value', '4');
            numKey4.id = '4';
            numKey4.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row3Div.appendChild(numKey4);
        
                const numKey4BtnSpan = document.createElement('span');
                numKey4BtnSpan.innerText = '4';
                numKey4.appendChild(numKey4BtnSpan)
        
            const numKey5 = document.createElement('button');
            numKey5.setAttribute('type', 'button');
            numKey5.setAttribute('value', '5');
            numKey5.id = '5';
            numKey5.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row3Div.appendChild(numKey5);
            
                const numKey5BtnSpan = document.createElement('span');
                numKey5BtnSpan.innerText = '5';
                numKey5.appendChild(numKey5BtnSpan)
        
            const numKey6 = document.createElement('button');
            numKey6.setAttribute('type', 'button');
            numKey6.setAttribute('value', '6');
            numKey6.id = '6';
            numKey6.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row3Div.appendChild(numKey6);
                
                const numKey6Span = document.createElement('span');
                numKey6Span.innerText = '6';
                numKey6.appendChild(numKey6Span)
        
            const subtractionKey = document.createElement('button');
            subtractionKey.setAttribute('type', 'button');
            subtractionKey.setAttribute('value', '-');
            subtractionKey.id = 'subtract';
            subtractionKey.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row3Div.appendChild(subtractionKey);
                    
                const subtractionKeyBtnSpan = document.createElement('span');
                subtractionKeyBtnSpan.style.cssText = 'color: #532ff3';
                subtractionKeyBtnSpan.innerText = '-';
                subtractionKey.appendChild(subtractionKeyBtnSpan)

        const row4Div = document.createElement('div');
        row4Div.className = 'row g-2 justify-content-center'
        calculatorScreen.appendChild(row4Div);
        
            const numKey1 = document.createElement('button');
            numKey1.setAttribute('type', 'button');
            numKey1.setAttribute('value', '1');
            numKey1.id = '1';
            numKey1.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row4Div.appendChild(numKey1);
        
                const numKey1BtnSpan = document.createElement('span');
                numKey1BtnSpan.innerText = '1';
                numKey1.appendChild(numKey1BtnSpan)
        
            const numKey2 = document.createElement('button');
            numKey2.setAttribute('type', 'button');
            numKey2.setAttribute('value', '2');
            numKey2.id = '2';
            numKey2.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row4Div.appendChild(numKey2);
            
                const numKey2BtnSpan = document.createElement('span');
                numKey2BtnSpan.innerText = '2';
                numKey2.appendChild(numKey2BtnSpan)
        
            const numKey3 = document.createElement('button');
            numKey3.setAttribute('type', 'button');
            numKey3.setAttribute('value', '3');
            numKey3.id = '3';
            numKey3.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row4Div.appendChild(numKey3);
                
                const numKey3Span = document.createElement('span');
                numKey3Span.innerText = '3';
                numKey3.appendChild(numKey3Span)
        
            const additionKey = document.createElement('button');
            additionKey.setAttribute('type', 'button');
            additionKey.setAttribute('value', '+');
            additionKey.id = 'add';
            additionKey.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row4Div.appendChild(additionKey);
                    
                const additionKeyBtnSpan = document.createElement('span');
                additionKeyBtnSpan.style.cssText = 'color: #532ff3';
                additionKeyBtnSpan.innerText = '+';
                additionKey.appendChild(additionKeyBtnSpan)

        const row5Div = document.createElement('div');
        row5Div.className = 'row g-2 justify-content-center'
        calculatorScreen.appendChild(row5Div);
        
            const numKey0 = document.createElement('button');
            numKey0.setAttribute('type', 'button');
            numKey0.setAttribute('value', '0');
            numKey0.id = '0';
            numKey0.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row5Div.appendChild(numKey0);
        
                const numKey0BtnSpan = document.createElement('span');
                numKey0BtnSpan.innerText = '0';
                numKey0.appendChild(numKey0BtnSpan)
        
            const numKey00 = document.createElement('button');
            numKey00.setAttribute('type', 'button');
            numKey00.setAttribute('value', '00');
            numKey00.id = '00';
            numKey00.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row5Div.appendChild(numKey00);
            
                const numKey00BtnSpan = document.createElement('span');
                numKey00BtnSpan.innerText = '00';
                numKey00.appendChild(numKey00BtnSpan)
        
            const numKeyModulus = document.createElement('button');
            numKeyModulus.setAttribute('type', 'button');
            numKeyModulus.setAttribute('value', '%');
            numKeyModulus.id = '%';
            numKeyModulus.className = "dataKeys btn btn-light border border-2 col-3 text-sm-center lead-font-weight h6"
            row5Div.appendChild(numKeyModulus);
                
                const numKeyModulusSpan = document.createElement('span');
                numKeyModulusSpan.innerText = '%';
                numKeyModulus.appendChild(numKeyModulusSpan)
        
            const evalKey = document.createElement('button');
            evalKey.setAttribute('type', 'button');
            evalKey.setAttribute('value', '=');
            evalKey.id = 'equal';
            evalKey.className = "evalButton btn btn-warning border border-2 col-3 text-sm-center lead-font-weight h6"
            row5Div.appendChild(evalKey);
                    
                const evalKeyBtnSpan = document.createElement('span');
                evalKeyBtnSpan.style.cssText = 'color: #532ff3';
                evalKeyBtnSpan.innerText = '=';
                evalKey.appendChild(evalKeyBtnSpan)


// JS to accept the operation keys or data keys from the UI
const calButtons = document.querySelectorAll('.dataKeys');
var lastKey;
var operationKeys = ['+', '-', '/', '*', '.', 'back-space', '×', ''];

calButtons.forEach(getButtonValue);

function getButtonValue(calButton) {
    calButton.addEventListener('click', (e) => {
        var btnValue = e.target.innerText;

        if (operationKeys.includes(lastKey)) {
            if (operationKeys.includes(btnValue)) {
                alert('Please enter a number');
                return;
            }
        }

        lastKey = btnValue;
        if (btnValue !== 'clear' || 'back-space') {
           var result = document.getElementById('result');
           var old = result.value;
           result.value = old + btnValue;
        }
    });
}

// JS for evaluating or operating or calculating
var equalBtn = document.querySelector('#equal');

equalBtn.addEventListener('click', (e) => {
    var boxValue = document.querySelector('#result');
    boxValue.value = eval(boxValue.value.replace(/×/g, "*"))
})


//  JS for clearing the input field or All Clear
var clrBtn = document.querySelector('#clear');

clrBtn.addEventListener('click', (e) => {
    var boxValue = document.querySelector('#result');
    boxValue.value = '';
})


// JS for accepting numbers from keyboard
addEventListener('keydown', (event) => {
    event.preventDefault();


    let keyValue = event.key;

    if (operationKeys.includes(lastKey)) {
        if (operationKeys.includes(keyValue)) {
            alert('Only numbers are allowed');
            return;

        }
    }   
    if (Number.isInteger(parseInt(keyValue))) {
        var result = document.getElementById('result');
        var old = result.value;
        result.value = old + keyValue;
        lastKey = keyValue;
        }
    else{
        alert ('Only numbers are allowed');
        }
})

//JS for clearing lastKey or backspace
var backSpaceBtn = document.querySelector('.back-space');

backSpaceBtn.addEventListener('click', (b) => {
    var boxValue = (document.querySelector('#result')).value;
    boxValue = boxValue.slice(0, -1);
    result.value = boxValue;
    lastKey= ' '; // last key needs to be set to a space string after backspace so operating key can be entered/replaced after clearing
})