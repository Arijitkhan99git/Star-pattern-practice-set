const n=6;
let temp1=1;
let temp2=1;

for(i=1; i<=n; i++){
    let row = ''

    for(j=1;j<=i;j++){
        
        row+= `${temp2} `
        temp2==1? temp2=0: temp2=1;
    }

   
    console.log(row);
     temp1==1? temp1=0: temp1=1;
     temp2= temp1
}