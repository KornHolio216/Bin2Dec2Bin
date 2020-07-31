//bin2dec

const bin2dec = document.querySelector(".bin2dec")

//adding  event listener for changes to the form
bin2dec.addEventListener("change", ConvertBin2Dec)

function ConvertBin2Dec() {
    const bin = document.querySelector(".binInput").value

      //making sure field is not empty
    if (bin === ""){
    return alert("The field cannot be empty!") 
    }
    //checking string contain an number other than 0 or 1
    bin.split('').map((char) => {
        if (char !== '0' && char !== '1'){
            return alert('Please, enter a binary number');
        } 
    });
    //chaning binary number into decimal number
    const dec = parseInt(bin, 2)
    //changing input value
    document.querySelector(".decOutput").value = dec
    return true
}

//dec2bin

const dec2bin = document.querySelector(".dec2bin")

//adding  event listener for changes to the form
dec2bin.addEventListener("change", ConvertDec2Bin)

function ConvertDec2Bin() {
    const dec = document.querySelector(".decInput").value

     //making sure field is not empty
    if(dec===""){
        return alert("The field cannot be empty!")
    }
     //chaning decimal number into binary number
    const bin = parseInt(dec, 10).toString(2)
        //changing input value
    document.querySelector(".binOutput").value = bin
}
