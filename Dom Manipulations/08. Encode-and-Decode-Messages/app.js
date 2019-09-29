function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName("button");
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    const getTextToEncode = () => 
        document.getElementsByTagName("textarea")[0].value;

    const getEncodedMessage = () =>
        getReceiverTextArea().textContent;

    const getSenderTextArea = () =>
        document.getElementsByTagName("textarea")[0];

    const getReceiverTextArea = () => 
        document.getElementsByTagName("textarea")[1];

    const encodeText = (textToEncode) => {
        let encodedText = "";

        for (const symbol of textToEncode) {
            const symbolAscii = symbol.charCodeAt(0);
            const encodedSymbol = String.fromCharCode(symbolAscii + 1);
            encodedText += encodedSymbol;
        }

        return encodedText;
    }

    const decodeText = (encodedText) => {
        let decodedText = "";

        for (const encodedSymbol of encodedText) {
            const encodedSymbolAscii = encodedSymbol.charCodeAt(0);
            const decodedSymbol = String.fromCharCode(encodedSymbolAscii - 1);
            decodedText += decodedSymbol;
        }

        return decodedText;
    }

    const clearSenderTextArea = () => {
        const senderTextArea = getSenderTextArea();
        senderTextArea.value = "";
    }

    const updateLastReceivedMessage = (newMessage) => {
        const receiverTextArea = getReceiverTextArea();
        receiverTextArea.textContent = newMessage;
    }

    const encode = () => {
        const textToEncode = getTextToEncode();
        const encodedText = encodeText(textToEncode);
        clearSenderTextArea();
        updateLastReceivedMessage(encodedText);
    }

    const decode = () => {
        const encodedMessage = getEncodedMessage();
        const decodedMessage = decodeText(encodedMessage);
        getReceiverTextArea().textContent = decodedMessage;
    }


    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);
}