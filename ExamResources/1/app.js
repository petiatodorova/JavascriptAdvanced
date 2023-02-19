window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById("first-name");
    let lastNameElement = document.getElementById("last-name");
    let peopleCountElement = document.getElementById("people-count");
    let fromDateElement = document.getElementById("from-date");
    let daysCountElement = document.getElementById("days-count");
    let nextStepBtnElement = document.getElementById("next-btn")
    let ticketPreviewElement = document.getElementById("info-ticket");
    let confirmTicketElement = document.getElementById("confirm-ticket-section");
    let bodyElement = document.getElementById("body");
    let mainElement = document.getElementById("main");

    nextStepBtnElement.addEventListener('click', onNextStepClick);
    function onNextStepClick(e) {
        e.preventDefault();
        if (firstNameElement.value == ''
            || lastNameElement.value == ''
            || peopleCountElement.value == ''
            || fromDateElement.value == ''
            || daysCountElement.value == '') {
            return;
        }

        let liElement = document.createElement("li");
        liElement.setAttribute('class', 'ticket');

        let articleElement = document.createElement("article");

        // article
        let fullName = document.createElement("h3");
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        // article
        let fromDate = document.createElement("p");
        fromDate.textContent = `From date: ${fromDateElement.value}`;

        // article
        let forFiveDays = document.createElement("p");
        forFiveDays.textContent = `For ${daysCountElement.value} days`;

        // article
        let forFivePeople = document.createElement("p");
        forFivePeople.textContent = `For ${peopleCountElement.value} people`;

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleElement.appendChild(fullName);
        articleElement.appendChild(fromDate);
        articleElement.appendChild(forFiveDays);
        articleElement.appendChild(forFivePeople);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        ticketPreviewElement.getElementsByClassName("ticket-info-list")[0].appendChild(liElement);

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editPeopleCount = peopleCountElement.value;
        let editFromDate = fromDateElement.value;
        let editDaysCount = daysCountElement.value;

        firstNameElement.value = "";
        lastNameElement.value = "";
        peopleCountElement.value = "";
        fromDateElement.value = "";
        daysCountElement.value = "";

        nextStepBtnElement.disabled = true;

        editBtn.addEventListener("click", onEdit);
        function onEdit() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            peopleCountElement.value = editPeopleCount;
            fromDateElement.value = editFromDate;
            daysCountElement.value = editDaysCount;

            liElement.remove();

            nextStepBtnElement.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);
        function onContinue() {
            liElement.removeChild(editBtn);
            liElement.removeChild(continueBtn);

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            liElement.appendChild(confirmBtn);
            liElement.appendChild(cancelBtn);

            confirmTicketElement.getElementsByClassName("confirm-ticket")[0].appendChild(liElement);

            nextStepBtnElement.disabled = true;

            confirmBtn.addEventListener("click", onConfirm);
            function onConfirm() {
                bodyElement.textContent = '';
                let h1Element = document.createElement("h1");
                h1Element.setAttribute("id", "thank-you");
                h1Element.textContent = "Thank you, have a nice day!";
                bodyElement.appendChild(h1Element);
            }

        }



    }

}




