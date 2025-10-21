let n = 3

for(i=0; i<n; i ++){
    let row = ''

    for(j=0; j<n-i-1; j++){
        row+= " "
    }

    for(j=0; j<2*i+1; j++)
    {
        row+= '*'
    }

     for(j=0; j<n-i-1; j++){
        row+= ' '
    }

   console.log(row);
   
}