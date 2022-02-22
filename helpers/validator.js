'use strict';

const VALUE_OPTIONS={
    INPUT:{
        text: (val)=>{
            //not white space
            if(val === null || val.match(/^ *$/) !== null){
                return false
            }
        },
        number:{},
        email:"",
        checkbox:""
    },
    select:{

    }
}

function validator(...elem){
 return elem.every(element => {
     if(!VALUE_OPTIONS[element.tagName][element.type](element.value)){
         console.log("false")
        createAlert();
        return false
     }
 });
 
 
}