const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db) {

    /* Inserir dados na tabela */
    /*await saveOrphanage(db, {
        lat: "-27.2185292",
        lng: "-49.6466788",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "545435345335",
        images: [
            "https://blog-pt.kinedu.com/wp-content/uploads/2019/05/original-9e61519a93a90dfacd5799bf95e32b86.jpg",

            "https://s2.glbimg.com/Wiv1FLFlGPAumfAgiwCozLSEQaA=/620x452/e.glbimg.com/og/ed/f/original/2014/05/15/78718715.jpg"
        ].toString(),
        instructions: "Venha como sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    })
*/
    /* Consultar dados da tabela */
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    /* Consultar somente 1 orphanato, pelo id */
    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)  */

    /* Deletar dado da tabela */
    /* console.log(await db.run("DELETE FROM orphanages WHERE id = '3'")) */
    /* console.log(await db.run("DELETE FROM orphanages WHERE id = '5'")) */

})