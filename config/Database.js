import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('synrgy_ch5_challenge', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

export { sequelize };
