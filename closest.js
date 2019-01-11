function closestNumber(a,b){
    var x=a,y,i=1;
    if (b=== undefined){
        return '';
    }
    for (i=1; i >0 ; )
    {
        if (a%b == 0)
        {
            return x;
        }
        else
        {
            a--;
            x=a;
        }
    }
}

console.log(closestNumber(2));