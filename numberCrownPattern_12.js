const n=6

for(i=1;i<=n;i++){
    row=''
    for(j=1;j<=i;j++){
        row+=`${j}`
    }

    for(j=1;j<=n*2-i*2;j++){
        row+=' '
    }

    for(j=i;j>=1;j--){
        row+=`${j}`
    }
    console.log(row);
    
}