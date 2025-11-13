describe('iOS Native Features', () => {
    it('click back button by accessibility id', async() => {
        await $('~BackButton').click();
        await expect (await $('//XCUIElementTypeNavigationBar[@name="UIKitCatalog"]')).toBeDisplayed();
    });

    // it('find element by predicate string', async() => {
    //     await $('//XCUIElementTypeStaticText[@name="Views"]').click();
    //     // const alertText = 'name == "Alert Controllers"'; 
    //     const alertText = 'value BEGINSWITH[c] "alert"'; 
    //     await $(`-ios predicate string:${alertText}`).click(); //
    // });

    it('Working with scrollable elements', async() => {
        //easiest
        // await driver.execute('mobile: scroll', {direction: "down"});
        // await driver.execute('mobile: scroll', {direction: "up"});     
        
        //complex
        await $('//XCUIElementTypeStaticText[@name="Pickers"]').click();
        await $('//XCUIElementTypeStaticText[@name="Picker View"]').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
    
        await driver.execute('mobile:scroll', {element:redPicker.elementId, direction:"down"});
        await driver.execute('mobile:scroll', {element:bluePicker.elementId, direction:"up"});

        await driver.pause(2000);

    });

    it('Working with scrollable elements', async() => {
        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');
    
        //set purple color (125, 0, 125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(2000);

    });

    // it('Working with alert box', async() => {
    //     await $('~OK / Cancel').click();

    //     //click ok
    //     // await $('~OK').click();

    //     console.log(await driver.getAlertText());

    //     //accept/dismiss alert
    //     await driver.dismissAlert();

    //     //assertion
    //     await expect($('~OK')).not.toExist();
    // });



});