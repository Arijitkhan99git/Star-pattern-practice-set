let n = 3
let space=0;

for(i=0; i<n; i ++){
    let row = ''

    for(j=1; j<=n-i; j++){
        row+= "*"
    }

    for(j=0; j<space; j++)
    {
        row+= " "
    }

     for(j=1; j<=n-i; j++){
        row+= "*"
    }


   console.log(row);
   space= space+2;
}

space=space-2;

for(i=n-1; i>=0; i --){
    let row = ""

    for(j=1; j<=n-i; j++){
        row+= "*"
    }

    for(j=0; j<space; j++)
    {
        row+= " "
    }

     for(j=1; j<=n-i; j++){
        row+= "*"
    }


   console.log(row);
   space= space-2;
   
}
