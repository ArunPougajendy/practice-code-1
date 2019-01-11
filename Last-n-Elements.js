var numbers =[7,9,0,-2];
function lastNElements( number , n) {
    length = number.length;
    console.log(length);
    if ( length == 0)
	{
		return 'empty array';
	}
    
    
    if (n) {
        console.log('in function');
        return number.slice(Math.max(length - n, 0));
    }
    else {
        return number;
    }
}
console.log(lastNElements(numbers,2));
console.log(lastNElements(numbers,undefined));
console.log(lastNElements([],3));
//.slice(Math.max(length - b ,0))