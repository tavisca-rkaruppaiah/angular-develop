import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidator{
    static InvalidProjectName(control : FormControl):{[s:string] : boolean}{
        if(control.value === 'Test'){
            return {'invalidProjectName':true}
        }
        return null;
    }

    static asyncInvalidProjectName(control:FormControl) : Promise<any> | Observable<any>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 'TestProject'){
                    resolve({'invalidProjectName':true})
                }else{
                    resolve(null);
                }
            }, 2000);
        });
    }
}