describe('Add Notes', () => {
    it('Skip tutorial', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();

    })

    it('Add a note, save changes & verify note', async() => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Naruto\nOnePice\nAOT');

        //save changes
        await driver.back();
        await driver.back();

        //assertion
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Naruto\nOnePice\nAOT');

    })

    it('Delete a note & check the note in trash can', async() => {
        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        
        //click on more icon
        await $('~More').click();

        //click on delete item
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on trash can item
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]').click();

        //assertions
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        await expect(trashCanItem).toEqual(note);


    });
});                                                                                                                                                                                                            







