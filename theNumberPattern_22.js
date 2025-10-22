let n = 4
let max= n*2-1
let temp1=0, temp2=0;
let temp3=max-1, temp4=max-1;
let count=n;

for(i=0; i<max; i ++){
    let row = ""
    for(j=0; j<max; j++){
        if(temp1==i || temp2==j || temp3==i || temp4==j)
        {
           
            count=n;
           
        }else{
           count=count-1
        }
          
         row+=`${count}`
       
    }
    console.log(row);
    
        temp1=i+1
        temp2=j+1
        // temp3=temp3-1
        // temp4=temp4-1
        
}