
function isAnagram(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.lenght !== str2.lenght){
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('Silent', 'Listen'));