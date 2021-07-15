document.getElementById("addExpense").onclick = function addNewItem() {


    // Step 1: Add input from <input> Name

    // select <input> Name
    const name = document.getElementById("name");
    // select value in <input> Name
    const textAddedInNameForm = document.createTextNode(name.value);
    // create new <td>
    const nameCell = document.createElement("td");
    // add textAddedInNameForm to new <td>
    nameCell.appendChild(textAddedInNameForm);
    // create new <tr>
    const newRow = document.createElement("tr");
    // add newly created <td> to newly created <tr>
    newRow.appendChild(nameCell);
    // select <table>
    const table = document.getElementById("table");
    // add newly created <tr> to existing <table>
    const addNewItem = table.appendChild(newRow);

    // Step 2: Add input from <input> Date

    // select <input> Date
    const date = document.getElementById("date");
    // select value in <input> Date
    const dateValue = document.createTextNode(date.value);
    // add <td> with value from <input> Date
    const cellDate = document.createElement("td");
    // add dateValue to new <td>
    cellDate.appendChild(dateValue);
    // add <td> for Date to <tr>
    newRow.appendChild(cellDate);

    // Step 3: Add input from <input> Amount

    // select <input> Amount
    const amount = document.getElementById("amount");
    // select value in <input> Amount
    const amountValue = document.createTextNode(amount.value);
    // add <td> with value from <input> Amount
    const cellAmount = document.createElement("td");
    // add amountValue to new <td>
    cellAmount.appendChild(amountValue);
    // add <td> for Amount to <tr>
    newRow.appendChild(cellAmount);

    // Step 4: Add button "x"

    // create button
    const x = document.createElement("button");
    // Create text "x" for button
    const textButtonX = document.createTextNode("x");
    // add text "x" to button
    x.appendChild(textButtonX);
    // add button with text "x" to <tr>
    newRow.appendChild(x);
    // if button "x" is hovered -> red
    x.onmouseenter = function () {
        x.style.backgroundColor = "crimson";
    }
    x.onmouseleave = function () {
        x.style.backgroundColor = "";
    }

    // Step 5: if button "x" is clicked -> remove <tr>
    x.onclick = function () {
        newRow.remove();
    }

    // Step 6: remove original <td>

    // select original <td>
    const firstRow = document.getElementById("firstRow");
    // remove original <td>
    firstRow.remove();

}