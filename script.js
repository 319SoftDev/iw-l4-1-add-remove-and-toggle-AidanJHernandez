const inbox = document.querySelector("#heading");
const subheading = document.querySelector("#subheading");

const changeFontColor = (e) => {
    e.target.classList.add("blue-text");
}

heading.addEventListener("click", changeFontColor);
subheading.addEventListener("click", changeFontColor);



const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden")
};

replyButton.addEventListener("click", openReplyMessage);




const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");

const closeReplyMessage = () => {
    replyMessage.classList.add("hidden")
}

sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click", closeReplyMessage);