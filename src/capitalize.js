export function capitalize(str) {
    if (str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1);
}

//str is not array but we can access the first character of a string using str[0].
//str.slice(1) makes "hello" into "ello".