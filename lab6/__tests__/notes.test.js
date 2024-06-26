describe('Basic user flow for Website', () => {
    // First, visit the index.html Notes App
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/index.html');
    });
  
    // Next, check to make sure that no notes are on the initial page
    it('Initial Home Page - Check for 0 notes', async () => {
      console.log('Checking for 0 notes...');
      // Query select all of the notes and return the length of that array
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      // Expect that array from earlier to be of length 0, meaning 0 notes were found
      expect(numNotes).toBe(0);
    });
  
    // Check to make sure that clicking the button to add a new note actually populates a note on screen.
    it('Make sure that clicking Add Note, adds notes', async () => {
      console.log('Clicking Add Note 4x...');
      // Query select the Add Note button element
      const addNotesButton = await page.$('button');
      // Keep clicking the button and getting the numNotes on each page
      for (let i = 0; i < 4; i++) {
        // Clicks a button and tracks how many notes there are currently.
        await addNotesButton.click(); 
        const numNotes = await page.$$eval('textarea', (notes) => {
          return notes.length;
        });
        // This part checks the value of the newest added text area for each iteration to see that it does not have text
        const notes = await page.$$('textarea');
        const lastNote = notes[notes.length - 1];
        const lastNoteContent = await page.evaluate((note) => note.value, lastNote);
        expect(numNotes).toBe(i + 1);
        expect(lastNoteContent).toBe("");
      }
    }, 10000);
  
    // Checks to make sure that creating a note then adding text to it makes it so that the text is stored properly in it.
    it('Adding a new note while also adding text to it', async () => {
      console.log('Adding note with text...');
      const addNotesButton = await page.$('button');
      await addNotesButton.click();
      const notes = await page.$$('textarea');
      const recentNote = notes[notes.length - 1];
      await recentNote.type("text");
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      const recentNoteContent = await page.evaluate((note) => note.value, recentNote);  
      expect(numNotes).toBe(5);
      // Pressing tab to save note contents
      await page.keyboard.press('Tab');
      expect(recentNoteContent).toBe("text");
    }, 2500);
  
    // Checks to make sure that after you reload the page it remembers all the notes you had on the page.
    it('Refreshing page does not get rid of notes', async () => {
      console.log('Refreshing page...');
      await page.reload(); // Reloads the page
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      expect(numNotes).toBe(5); // No note is lost.
    }, 10000);
  
    // Check to make sure that after you reload the page it remembers all of the items in your cart
    it('Selecting an existing note and editing the note in it', async () => {
      console.log('Editing existing note...');
      const firstNote = await page.$('textarea');
      await firstNote.type('editing the existing note now text');
      const firstNoteContent = await page.evaluate((note) => note.value, firstNote); // Gets the value of a note/textarea tag
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      expect(numNotes).toBe(5);
      // Pressing tab to save note contents
      await page.keyboard.press('Tab');
      expect(firstNoteContent).toBe("editing the existing note now text");
    }, 10000);
  
    // Checks to make sure deleting a note is as easy as doubling clicking it.
    it('Delete an existing note by double clicking it', async () => {
      console.log('Deleting note...');
      const noteToDelete = await page.$("textarea");
      await noteToDelete.click({count: 2}); // double clicks the note; the deletion operation
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      expect(numNotes).toBe(4);
    }, 10000);
  
    // Checkis to make sure that focused notes cannot be either deleted from the page and stays there post-reload
    it('Checking to make sure you cannot delete a focused note', async () => {
      console.log('Checking focused notes can\'t be deleted, i.e. note still exists after reload even when focused');
      const noteToFocus = await page.$("textarea"); // Select the first note you see.
      await noteToFocus.click(); // Focusing the note means clicking on it
      await page.reload(); // reloading the page
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      expect(numNotes).toBe(4); // The number of notes does not go down.
    }, 10000);
    
    it('Checking to make sure you cannot save a focused note', async () => {
      console.log('Checking focused notes can\'t be save, i.e. note still exists but does not have the same text content when reloaded and still focused');
      const noteToFocusOne = await page.$("textarea"); // Select the first note gotten
      await noteToFocusOne.click(); // Focusing the note
      await noteToFocusOne.type('this will not be saved'); // Typing something into the note
      await page.reload(); // Reloading the page
      const noteToFocusTwo = await page.$("textarea");
      await noteToFocusTwo.click(); // This will focus the note and show that the same note object is selected, but that it has no text in it anymore
      const noteToFocusContent = await page.evaluate((note) => note.value, noteToFocusTwo);
      const numNotes = await page.$$eval('textarea', (notes) => {
        return notes.length;
      });
      expect(numNotes).toBe(4); // Number of notes does not change.
      expect(noteToFocusContent).toBe(""); // did not save the text typed into it, though the note itself will still be there.
    }, 10000);
  });
  