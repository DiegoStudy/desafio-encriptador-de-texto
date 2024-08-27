const buttonEncrypt = document.querySelector(".button-encrypt");
const buttonDecrypt = document.querySelector(".button-decrypt");
const imageContainer = document.querySelector(".image-container");
const messageContainer = document.querySelector(".message-container");
const resultText = document.querySelector(".result-text");

buttonEncrypt.addEventListener("click", encrypt);
buttonDecrypt.addEventListener("click", decrypt);

function encrypt() {
    hideElements();
    const inputText = getInputText();
    resultText.textContent = encryptText(inputText);
}

function decrypt() {
    hideElements();
    const inputText = getInputText();
    resultText.textContent = decryptText(inputText);
}

function getInputText() {
    const textBox = document.querySelector(".text-box");
    return textBox.value;
}

function hideElements() {
    imageContainer.style.display = "none";
    messageContainer.style.display = "none";
}

function encryptText(message) {
    return message.replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/a/g, "ai")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
}

function decryptText(message) {
    return message.replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ai/g, "a")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");
}

const buttonCopy = document.querySelector(".button-copy");
buttonCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(resultText.textContent)
        .then(() => console.log("Texto copiado al portapapeles"))
        .catch(err => console.error("Error al copiar el texto: ", err));
});
