(async function() {
    const {
        GoogleSpreadsheet
    } = require('google-spreadsheet');
    const creds = require('./client_secret.json');
    const doc = new GoogleSpreadsheet('1N_S9XDnGyX91lAWiT2ToeSxXkl6WABV33nR6w1zra7Y');

    doc.useServiceAccountAuth(creds);

    await doc.loadInfo(); 
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    const rows = await sheet.getRows(); // can pass in { limit, offset }
    console.log(rows.length);
}());