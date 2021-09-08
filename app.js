const yargs = require('yargs');
const notes = require('./notes')

yargs.version('1.0.1');

yargs.command({
    command: 'add',
    describe: 'Creates a note.',
    builder: {
        title: {
            describe: 'Title of the note.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note.',
    builder: {
        title: {
            describe: 'Title of the note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists out all notes.',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads a note.',
    builder: {
        title: {
            describe: 'Title of the note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'hello',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.parse();