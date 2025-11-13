describe('Todo list', () => {
    it('Create a Todo List', async() => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();
        await expect(await $("~Things to do today")).toBeExisting();
    });

    it('Create a to do item', async() => {
        await $('~Things to do today').click();
        await $('//XCUIElementTypeStaticText[@name="Create item"]').click();
        await $('//XCUIElementTypeTextField[@value="Title"]').addValue('Update Resume');
        await $('//XCUIElementTypeTextField[@value="Due"]').click();
        // await $('~Date Picker').click();
        await $('~16').click();
        await $('~Create').click();
        await expect(await $('~Update Resume')).toBeExisting();
        await expect(await $('~Due November 16, 2025')).toBeExisting();
    });


});