let n = 5

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


for(i=n-1; i>=0; i --){
    let row = ''

    for(j=0; j<n-i-1; j++){
        row+= " "
    }

    for(j=2*i+1; j>0; j--)
    {
        row+= '*'
    }

     for(j=0; j<n-i-1; j++){
        row+= ' '
    }

   console.log(row);
   
}
