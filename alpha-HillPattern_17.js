let n = 6
let code =65;

for(i=0; i<n; i ++){
    let row = ''

    for(j=0; j<n-i-1; j++){
        row+= " "
    }

    for(j=0; j<2*i+1; j++)
    {
        row+= `${String.fromCharCode(code)}`

        if(j>=i)
        {        
          code=code-1;
        }
        else{
            code=code+1;
        }
    }

     for(j=0; j<n-i-1; j++){
        row+= ' '
    }

   console.log(row);
   code=65;
}