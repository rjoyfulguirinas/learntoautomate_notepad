// describe('Android Elements Tests', () => {
//     it('Find element by accessibility id', async() => {
//         //find element by accessibility id
//         const appOption = await $('~App');

//         //click on element
//         await appOption.click();

//         //assertion
//         const actionBar = await $('~Action Bar');
//         await expect(actionBar).toBeExisting();
//     });

//     it('Find element by class name', async() => {
//         //find element by class name
//         const className = await $('android.widget.TextView'); //$ - finds the 1st  element
//         // console.log(await className.getText());
        
//         //Assertion
//         await expect(className).toHaveText("API Demos");

//     });

//     xit('Find elements by Xpath', async() => { //x - skip
//         //xpath-(//tagname[@attribute=value]) //tagname = class name, attribue = content-desc,etc.
//         await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

//         //find by resourceId
//         await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

//         //find by text
//         await $('//android.widget.TextView[@text="Command two"]').click();
//         console.log("clicking command two");

//         //find by class - assertion
//         const textAssertion = await $('//android.widget.TextView');
//         await expect(textAssertion).toHaveText('You selected: 1 , Command two');
//      });

//      it('Find elements by UIAutomator', async () => {
//         //find element by text contains
//         await $('android = new UiSelector().textContains("Alert")').click();
//      });

//      it('Find multiple elements', async() => {
//         const expectedList = [
//             'API Demos', "Access'ibility",
//             'Accessibility', 'Animation',
//             'App', 'Content',
//             'Graphics', 'Media',
//             'NFC', 'OS',
//             'Preference', 'Text',
//             'Views',
//         ]
//         const actualList = []

//         //find multiple elements
//         const textList = await $$('android.widget.TextView');
        
//         //loop through them
//         for(const element of textList){
//             actualList.push(await element.getText());
//         }
//         //assert the list
//         await expect(actualList).toEqual(expectedList);
//      });

//      it('Working with a Text Field', async() => {
//         //find and click element Views
//         await $('~Views').click();

//         //find & click element Auto Complete
//         await $('~Auto Complete').click();

//         //find & click element Screen Top
//         await $('~1. Screen Top').click();

//         //find & enter country name in text field
//         const country = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]').addValue('Australia');

//         //assert
//         await expect(country).toHaveText("Australia");
//      });
// });

describe('Exercise - Text Field', () => {
    it('Text Field', async() => {
        //find & click element Views
        await $('~Views').click();

        //find & click element Auto Complete
        await $('~Auto Complete').click();

        //find & click element Screen Top
        await $('~1. Screen Top').click();

        //find & enter country name in text field
        await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]').addValue('Australia');

        //assert
        const country = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
        await expect(country).toHaveText("Australia");
        
    });
})