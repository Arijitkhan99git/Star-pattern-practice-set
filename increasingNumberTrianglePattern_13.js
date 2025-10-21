const n=6;
let count=1

for(i=1;i<=n;i++){
    row=''
    for(j=1;j<=i;j++){
        row+=`${count} `

        count= count+1;
    }

    console.log(row);
    
}