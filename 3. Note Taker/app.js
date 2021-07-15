document.getElementById("button").onclick = function addNote() {

    // create & style notes
    const newNote = document.createElement("div");
    newNote.width = "200px";
    newNote.height = "200px";
    newNote.style.border = "1px solid darkgoldenrod";
    newNote.style.marginLeft = "5px";

    function addNewNotesToDiv() {

        // select <div id="notes">
        const divNotes = document.getElementById("notes");

        // add newNote (global scope: ok) to <div id="notes">
        divNotes.appendChild(newNote);
    }

    addNewNotesToDiv();

    function addContentToNewNotes() {

        // select input
        const input = document.getElementById("input");

        // select text from <input>
        const text = document.createTextNode(input.value);

        // add text to newNote
        newNote.appendChild(text);

        // clear text from <input>
        input.value = "";
    }

    addContentToNewNotes();

    function addButtonToNotes() {

        // create & style button
        const button = document.createElement("button");
        button.width = "80px";
        button.height = "40px";
        button.style.backgroundColor = "darkgoldenrod";
        button.style.borderRadius = "5px";

        // create & add text for button
        const buttonText = document.createTextNode("Display");
        button.appendChild(buttonText);

        // add button to newNote
        newNote.appendChild(button);

        // if button clicked: show <div id="myModal">
        button.onclick = function showModal() {
            // get the modal
            const modal = document.getElementById("myModal");

            // get the <span> element that closes the modal
            const span = document.getElementById("close");

            // display Modal upon click
            modal.style.display = "block";

            // button "x" = close the Modal
            span.onclick = function () {
                modal.style.display = "none";
            }

        }

    }

    addButtonToNotes();

    function addTextToModal() {

    }

}