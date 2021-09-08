const chalk = require('chalk');
const fs = require('fs');

var addNote = (title, body) => {
    var notes = loadNotes();

    // same as filter but will stop checking for the rest if condition matches, and returns undefined if doesn't matches any
    var duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green('Note added successfully!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }

};

const removeNote = (title) => {
    var notes = loadNotes();

    //if true, filter will store that individual note in finalNotes in the form of an array
    var finalNotes = notes.filter((note) => note.title !== title);

    if (notes.length > finalNotes.length) {
        saveNotes(finalNotes);
        console.log(chalk.green('Note removal successful!'));
    } else {
        console.log(chalk.red('Note not found!'));
    }

};

const listNotes = () => {
    var notes = loadNotes();

    if (notes.length > 0) {
        console.log(chalk.yellow('Your Notes:'));

        notes.forEach((note) => {
            console.log(note.title);
        });
    } else {
        console.log(chalk.red('No any note recorded!'));
    }


};

var readNote = (title) => {
    var notes = loadNotes();

    var note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.blue(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('Title not found!'));
    }
};

const loadNotes = () => {
    try {
        var notesBuffer = fs.readFileSync('notes.json');
        var notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};