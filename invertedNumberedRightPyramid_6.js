let n = 5

for(i=0; i<n; i ++){
    let row = ''
   for(j=1; j<=n-i; j++){
    row+= `${j}`
   }
   console.log(row);
   
}