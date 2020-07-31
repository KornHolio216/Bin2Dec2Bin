//bin2dec
const bin2dec = document.querySelector(".bin2dec")

bin2dec.addEventListener("change", ConvertBin2Dec)

function ConvertBin2Dec() {
    const bin = document.querySelector(".binInput").value

    if (bin === "") return alert("The field cannot be empty!")
    bin.split('').map((char) => {
        if (char !== '0' && char !== '1'){
            return alert('Please, enter a binary number');
        } 
    });
    const dec = parseInt(bin, 2)
    document.querySelector(".decOutput").value = dec
    return true
}

//dec2bin

const dec2bin = document.querySelector(".dec2bin")

dec2bin.addEventListener("change", ConvertDec2Bin)

function ConvertDec2Bin() {
    const dec = document.querySelector(".decInput").value

    if(dec===""){
        return alert("The field cannot be empty!")
    }

    const bin = parseInt(dec, 10).toString(2)

    document.querySelector(".binOutput").value = bin
}
