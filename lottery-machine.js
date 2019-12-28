function lottery(str){
    let lotterNumber = '';

    for(let i=0; i<str.length; i++) {
        let char = str[i];
        if(char.charCodeAt() >= 48 && char.charCodeAt() <= 57) lotterNumber += str[i];
    }

    let uniqeStr = new Set(lotterNumber);
    lotterNumber = '';

    uniqeStr.forEach((val) => lotterNumber += val);

    if(lotterNumber.length > 0) return lotterNumber;
    else return 'One more run!';
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"));
console.log(lottery("ffaQtaRFKeGIIBIcSJtg"));
