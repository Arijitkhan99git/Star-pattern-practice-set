let n=4

for(i=1; i<=n*2; i++){
    let row=''

    let count=i;
    if(i>n){
        count = 2*n-i
    }

    for(j=1;j<=count;j++){
        row+='* '
    }

    console.log(row);
    
}