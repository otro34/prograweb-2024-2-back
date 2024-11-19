import app from './app.js';
import sequelize from './src/config/database.js';

async function main () {

    try {
        const init = process.argv[2];

        if (init) {
            await sequelize.sync({force: true});
        } else {
            await sequelize.sync({force: false});
        } 

        console.log('Database synchronized');

        app.listen(4001,() => {
            console.log('Server is running on port 4001');
        })


    } catch(error) {
        console.error(error);
    }
}

main();




