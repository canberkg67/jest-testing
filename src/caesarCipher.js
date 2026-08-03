function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);
    let shiftedCharCode;
    if (char >= "a" && char <= "z") {
        shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
    } else if (char >= "A" && char <= "Z") {
        shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
    } else {
        shiftedCharCode = charCode;
    }
    return String.fromCharCode(shiftedCharCode);
}

function isNonLetter(char) {
    return !(/[a-zA-Z]/.test(char));
}

export function caesarCipher(str, shift) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (isNonLetter(char)) {
            result += char;
        } else {
            result += shiftChar(char, shift);
        }
    }
    return result;
}
