import {$$} from "protractor";

export class AllVetspage {

    //elements
    vetList=$$("tbody:nth-child(2) tr > td:nth-child(1)")


    //methods

    checkVetPresent(name){
        return this.vetList.getText()
            .then(vetName=>{
                return vetName.includes(name);
            })
    }
    
}