import {$, $$, browser, Key} from "protractor";
import {VetModel} from "../Models/VetModel";

export class NewVetsPage{

    //elements
    firstName=$("#firstName");
    lastname=$("#lastName");
    type=$("#specialties");
    saveButton=$("[type=submit]");

    //methods

    AddInfoForVet(vet:VetModel) {
        this.firstName.sendKeys(vet.firstName);
        this.lastname.sendKeys(vet.lastName);
        this.type.click();
        $("[value=\'"+ vet.type +": Object\']").click();
        this.type.sendKeys(Key.ESCAPE)
        this.saveButton.click()
        browser.sleep(100);
    }


}