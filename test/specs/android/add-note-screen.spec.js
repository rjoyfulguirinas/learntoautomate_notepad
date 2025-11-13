// import AddNoteScreen from '../../android/screenobjects/add-note.screen.js';
import AddNoteScreen from '../../screenobjects/android/screenobjects/add-note.screen.js';

describe('Add Notes', () => {
    it('Skip tutorial', async() => {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteText).toBeDisplayed();

    })

    it('Add a note, save changes & verify note', async() => {
        await AddNoteScreen.addNoteText.click();
       
        await AddNoteScreen.textBtn.click();
      
        await expect(AddNoteScreen.editingText).toBeDisplayed();

        //add note title
        await AddNoteScreen.noteTitle.setValue("Anime List");

        //add note body
        await AddNoteScreen.noteBody.addValue('Naruto\nOnePice\nAOT');

        //save changes
        AddNoteScreen.saveNote();

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toBeDisplayed();

    })
})
    