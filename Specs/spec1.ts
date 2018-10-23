import {Utils} from "../Utilities/Utils";
import {MenuPage} from "../Pages/MenuPage";
import {browser} from "protractor";
import {OwnersPage} from "../Pages/OwnersPage";
import {OwnersData} from "../Test Data/OwnersData";
import {AllOwnerPage} from "../Pages/AllOwnerPage";
import {NewVetsPage} from "../Pages/NewVetsPage";
import {VetData} from "../Test Data/VetData";
import {AllVetspage} from "../Pages/AllVetspage";
let menuPage = new MenuPage();
let ownersPage = new OwnersPage();
let allOwnersPage = new AllOwnerPage();
let addVetPage = new NewVetsPage();
let allVetsPage = new AllVetspage();

describe("Owners",()=>{
    beforeEach(()=>{
        Utils.goToHomePage();
    });
    it("Add a new owner - check phone validation",()=>{
        menuPage.clickOwnersButton();
        menuPage.clickAddNewOwnerButton();
        ownersPage.addInformation(OwnersData.GigelPhoneValidation.firstName,OwnersData.GigelPhoneValidation.lastName,
            OwnersData.GigelPhoneValidation.address,OwnersData.GigelPhoneValidation.city,OwnersData.GigelPhoneValidation.telephone);
        ownersPage.addTelephone("asdsacda");
        browser.sleep(1000);

        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");

    });

    it("Add a new owner - happy path",()=>{
        menuPage.clickOwnersButton();
        menuPage.clickAddNewOwnerButton();
        ownersPage.addInformationForModel(OwnersData.GigelHappyPath);
        ownersPage.clickOnAddOwner();
        browser.sleep(100);

    });

    it("Check new owner was created",()=>{
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnerButton();
        expect(allOwnersPage.checkOwnerPresent(OwnersData.GigelHappyPath.firstName+" "+OwnersData.GigelHappyPath.lastName)).toBeTruthy();
    })

    it("Create new veterinarian",()=>{
        menuPage.clickVetButton();
        menuPage.clickAddNewVetButton();
        addVetPage.AddInfoForVet(VetData.GigelVeterinarul)
        expect(allVetsPage.checkVetPresent(VetData.GigelVeterinarul.firstName+" "+VetData.GigelVeterinarul.lastName)).toBeTruthy()
    })
});