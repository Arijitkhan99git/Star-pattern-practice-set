let n = 6
let space=n*2-2;

for(i=1; i<n*2;i++){
    let star=i;
    let row = ''

    if(i>n){
        star = n*2-i
    }

    for(j=1;j<=star;j++){
        row+='*'
    }

    for(j=1;j<=space;j++){
        row+= " "
    }

    for(j=1;j<=star;j++){
        row+='*'
    }

    console.log(row);
    if(i<n){
        space =space-2;
    } 
    else {
        space =space+2;
    }
}