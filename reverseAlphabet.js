const reverseString = (t) => {
    const text = t.split('');

    const numeric = '1234567890';
    let textResult = [];
    let num = '';

    const reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const item = text[i];
        if(numeric.includes(item)){
            num = item;
        } else {
            textResult.push(item)
        }
    }
    textResult.push(num);
    console.log(textResult.join(''))
}

reverseString('NEGIE1');