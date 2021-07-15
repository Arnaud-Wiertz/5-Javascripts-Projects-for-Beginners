// 5 Beginners JS Projects : To Do List 

/* Steps to be accomplished :

    1. If button "Submit" is clicked -> add a <li> to <ol>
    2. Add text from input to <li>
    3. If button "Clear List" is clicked -> remove all <li> from <ol>

    BONUS :
    4. Add button "x" to <li> // Problem: button is before <li> & needs to be afer <li>
    5. Add button "Done" to <li> // Problem: button is before <li> & needs to be afer <li>
    6. If button "x" is clicked -> remove <li> from <ol>
    7. If button "Done" is clicked -> turn <li> in green and bold

*/

// CODE :

// 1. If button "Submit" is clicked -> add a <li> to <ol>

document.getElementById("buttonSubmit").onclick = function () {

    // Create <li>
    const item = document.createElement("li");
    // Select <ol>
    const itemsList = document.getElementById("list");
    // Add <li> to <ol>
    itemsList.appendChild(item);

    // 2. Add text from <input> to <li> & clear text from <input>

    // Select <input>
    const text = document.getElementById("input");
    // Select text in <input>
    const textAddedInInput = document.createTextNode(text.value);
    // Add text in <input> to <li> about to be created
    item.appendChild(textAddedInInput);
    // Clear text from input
    text.value = "";

    // 4. Add button "x" to <li>

    // Create button
    const x = document.createElement("button");
    // Create text "x" for button
    const textButtonX = document.createTextNode("x");
    // Add text "x" to button
    x.appendChild(textButtonX);
    // Add button with text "x" to <li>
    item.appendChild(x);

    // 5. Add button "Done" to <li>

    // Create button
    const done = document.createElement("button");
    // Create text "Done" for button
    const textButtonDone = document.createTextNode("Done");
    // Add text "Done" to button
    done.appendChild(textButtonDone);
    // Add button with text "Done" to <li>
    item.appendChild(done);


    // 3. If button "Clear List" is clicked -> remove all <li> from <ol>

    document.getElementById("buttonClearList").onclick = function () {

        // Remove all <li>
        itemsList.innerHTML = "";

    }

    // 6. If button "x" is clicked -> remove <li> from <ol>

    x.onclick = function () {
        item.remove();
    }

    // 7. If button "Done" is clicked -> turn <li> in green and bold

    done.onclick = function () {
        item.style.color = "#00FF00";
        item.style.fontWeight = "bold";
    }
}