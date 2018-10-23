import {browser} from "protractor";

export class Utils {

     static goToHomePage(){
        browser.get(browser.baseUrl);
    }

}