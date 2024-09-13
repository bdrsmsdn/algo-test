const sentence = (t) => {
    const text = t.toString();
    let splittedText = text.split(" ");

    if(splittedText.length <= 1){
        console.log('Please fill the text');
    }

    let longestSentence = "";
    let totalChar = 0;

    for (let i = 0; i < splittedText.length; i++) {
        const item = splittedText[i];
        if(longestSentence.length < item.length){
            longestSentence = item;
            totalChar = item.length;
        }
    }

    console.log(`The longest sentence is: ${longestSentence} with ${totalChar} characters`);

}

sentence("Saya sangat senang mengerjakan soal algoritma");