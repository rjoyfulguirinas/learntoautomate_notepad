import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('Add & Delete Note', () => {
    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("Blackpink", "Jennie\nRosie\nJisoo\nLisa");
        await driver.back();
    });

    it('Delete a note & check the note in trash can', async() => {

        const note = await EditNoteScreen.firstNote.getText();

        //click on the note
        await EditNoteScreen.firstNote.click();
        
        //click on more icon
        await EditNoteScreen.moreTab.click();

        //click on delete item
        await EditNoteScreen.deleteBtn.click();

        //accept alert
        await driver.acceptAlert();

        
        //click on nav icon
        await EditNoteScreen.navTab.click();

        //click on trash can item
        await EditNoteScreen.trashBtn.click();

        //assertions
        const trashCanItem = await EditNoteScreen.firstNote.getText();
        await expect(trashCanItem).toEqual(note);


    });
});                                                                                                                                                                                                            







