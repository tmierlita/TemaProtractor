import {$, $$} from "protractor";
import * as ts from "typescript/lib/tsserverlibrary";
import convertCompilerOptions = ts.server.convertCompilerOptions;

export class AllOwnerPage {

    //elements
    ownerList=$$(".ownerFullName > a")


    //methods

    checkOwnerPresent(name){
        return this.ownerList.getText()
            .then(ownerName=>{
                return ownerName.includes(name);
            })
        }
}