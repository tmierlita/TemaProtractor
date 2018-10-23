import {$$} from "protractor";

export class MenuPage {
    //elements
    menuItems = $$(".nav.navbar-nav li a");
    homeButton = this.menuItems.get(0);
    ownersButton = this.menuItems.get(1);
    veterinariansButton = this.menuItems.get(4);
    petTypesButton = this.menuItems.get(7);
    specialitiesButton = this.menuItems.get(8);
    addNewOwnerButton = this.menuItems.get(3);
    allOwnerButton = this.menuItems.get(2);
    addNewVetButton=this.menuItems.get(6);

    //methods
    clickOwnersButton():void{
        this.ownersButton.click();
    }

    clickAddNewOwnerButton():void{
        this.addNewOwnerButton.click();
    }

    clickAllOwnerButton():void{
        this.allOwnerButton.click();
    }

    clickAddNewVetButton():void{
        this.addNewVetButton.click();
    }

    clickVetButton():void{
        this.veterinariansButton.click();
    }
}