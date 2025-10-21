const n=6;

let codeY =65+n-1;

for(i=0; i<n; i ++){
    let row = ""
    
    code= codeY;

    for(j=0; j<=i; j++){
       row+=`${String.fromCharCode(code)} `
       code ++;
    }

    console.log(row);
    codeY --;
}