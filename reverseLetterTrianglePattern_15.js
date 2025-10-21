const n=3;

let code =65;

for(i=0; i<n; i ++){
    let row = ""
    
    for(j=n; j>i; j--){
       row+=`${String.fromCharCode(code)} `
       code ++;
    }
    console.log(row);
    code=65;
}