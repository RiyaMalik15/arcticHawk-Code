import { AbstractControl } from "@angular/forms";


export class FcropValidator {
    static noRepeat(control: AbstractControl){
        let value:string = ""+control.value;
        console.log(value);
        if(value.match('^'+value[0]+'{'+value.length+'}$')){
            return {'noRepeat' : true}
        }
        return null;
        
    }

    static checkpassword(control:AbstractControl)
        {
            let pass:string=control.value as string
            var regex1="[A-Za-z]";
            var regex2="[A-Za-z0-9]";
            if(pass.match(regex1) || pass.match(regex2))
            {
                return null;
            }   
            return { 'checkpassword':true} 
        }

    
    static checkDate(date: AbstractControl) {
        let value = new Date(date.value);
        var today=new Date();
        let age=today.getFullYear()-value.getFullYear();
        if (age>=20){   
            return null;
        }
        else if(age<20) {
            
            return {"checkDate": true};
            
        }
        return null;
        
    }

    static checkName(name: AbstractControl) {
        let value = "" + name.value;
        if (value.match('^[A-Za-z ]+$')) {
            let names = value.split(" ");
            for (let i = 0; i < names.length; i++) {
                if (names[i].trim().length == 1) {
                    return { "checkName": true };
                }
            }
        }
        else {
            return { "checkName": true };
        }
        return null;
    }
}