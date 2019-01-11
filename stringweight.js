function strWeight(a,b){
    x=String.length(a);
      y=String.length(b);
      if (x>y)
      {return 1;}
      else if (y>x)
      {return 2;}
      else
      {return 'equal'}
      
  }

  console.log(strWeight('arun','arun'));