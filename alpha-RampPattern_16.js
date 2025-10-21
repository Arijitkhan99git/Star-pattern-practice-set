const n=6;

let code =65;

for(i=0; i<n; i ++){
    let row = ""
    
    for(j=0; j<=i; j++){
       row+=`${String.fromCharCode(code)} `
    }
    console.log(row);
    code ++;
}