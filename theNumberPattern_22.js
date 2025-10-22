let n = 5
let max= n*2-1
let top, bottom,right,left;


for(i=0; i<max; i ++){
    let row = ""
    for(j=0; j<max; j++){
      top=i;
      bottom=(2*n-2)-i;
      right= (2*n-2)-j;
      left=j;
    
      let value = n-Math.min(top, bottom, right, left)
      row+= `${value}`

    }

    console.log(row);
    
        
}