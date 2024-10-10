const { db } = require('./db');
const { Band, Musician, Song } = require('./index');

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // The 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Band', async () => {
        const band = await Band.create({ name: 'The Rockers', genre: 'Rock' });
        expect(band.name).toBe('The Rockers');
        expect(band.genre).toBe('Rock');
    });

    test('can create a Musician', async () => {
        const musician = await Musician.create({ name: 'John Doe', instrument: 'Guitar' });
        expect(musician.name).toBe('John Doe');
        expect(musician.instrument).toBe('Guitar');
    });

    test('can update a Band', async () => {
        const band = await Band.create({ name: 'The Rockers', genre: 'Rock' });
        await band.update({ genre: 'Alternative Rock' });
        expect(band.genre).toBe('Alternative Rock');
    });

    test('can update a Musician', async () => {
        const musician = await Musician.create({ name: 'John Doe', instrument: 'Guitar' });
        await musician.update({ instrument: 'Bass' });
        expect(musician.instrument).toBe('Bass');
    });

    test('can delete a Band', async () => {
        const band = await Band.create({ name: 'The Rockers', genre: 'Rock' });
        await band.destroy();
        const deletedBand = await Band.findOne({ where: { id: band.id } });
        expect(deletedBand).toBeNull();
    });

    test('can delete a Musician', async () => {
        const musician = await Musician.create({ name: 'John Doe', instrument: 'Guitar' });
        await musician.destroy();
        const deletedMusician = await Musician.findOne({ where: { id: musician.id } });
        expect(deletedMusician).toBeNull();
    });
});
