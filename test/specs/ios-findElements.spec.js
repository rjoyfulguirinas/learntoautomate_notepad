import { $, $$, browser, expect } from '@wdio/globals';

describe('iOS find elements', () =>  {
    it('click back button by accessibility id', async() => {
        await $('~BackButton').click();
        await expect (await $('//XCUIElementTypeNavigationBar[@name="UIKitCatalog"]')).toBeDisplayed();
    });

    it('click control', async() => {
        await $('//XCUIElementTypeStaticText[@name="Controls"]').click();
        await expect (await $('//XCUIElementTypeStaticText[@name="Buttons"]')).toBeDisplayed();  
    });

    it('find element by tag name/type', async() => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());
    });

    // it('find element by class chain', async() => {
    //     await $('//XCUIElementTypeStaticText[@name="Views"]').click();
    //     // const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Controllers"`]'; other way
    //     const alertText = '**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]'; 
    //     await $(`-ios class chain:${alertText}`).click(); //
    //     await $('~Simple').click();
    //     await expect(await driver.getAlertText()).toContain("A Short Title is Best");
    // });

    it('find element by predicate string', async() => {
        await $('//XCUIElementTypeStaticText[@name="Views"]').click();
        // const alertText = 'name == "Alert Controllers"'; 
        const alertText = 'value BEGINSWITH[c] "alert"'; 
        await $(`-ios predicate string:${alertText}`).click(); //
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title is Best");
    });
});