const bin2dec = document.querySelector(".bin2dec")

bin2dec.addEventListener("change", ConvertBin2Dec)

function ConvertBin2Dec(params) {
    const bin = document.querySelector(".binInput").value

    if (bin === "") return alert("The field cannot be empty!")
    bin.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Please, enter a binary number');
    });
    const dec = parseInt(bin, 2)
    document.querySelector(".decOutput").value = dec
    return true
}

