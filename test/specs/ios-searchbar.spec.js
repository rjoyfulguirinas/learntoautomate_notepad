describe('Search field', () =>  {
    it('click back button', async() => {
        await $('~BackButton').click();
        await expect (await $('//XCUIElementTypeNavigationBar[@name="UIKitCatalog"]')).toBeDisplayed();
    });

    it('click control', async() => {
        await $('//XCUIElementTypeStaticText[@name="Controls"]').click();
        await expect (await $('//XCUIElementTypeStaticText[@name="Buttons"]')).toBeDisplayed();

    });

    it('click search bar-default search bar & input then delete and verify empty field', async() => {
        const searchBarTitle = 'value BEGINSWITH "Search"'; 
        await $(`-ios predicate string:${searchBarTitle}`).click(); //
        await $('//XCUIElementTypeStaticText[@name="Default Search Bar"]').click();
        await $('//XCUIElementTypeSearchField').addValue("Risa");
        await $('~Clear text').click();
        await expect (await $('//XCUIElementTypeSearchField')).not.toHaveText();
    });

});