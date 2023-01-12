let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

let flag=true;


if(Object.keys(obj1).length === Object.keys(obj2).length)
{
    for(let i in obj1)
    {
      if(obj1[i] === obj2[i])
      {
      continue;  
      }
       else
        {
            flag=false;
            break;
        }
    }
}
else
{
    flag=false;
}
console.log(`${flag} - Two JSON have same property`);
