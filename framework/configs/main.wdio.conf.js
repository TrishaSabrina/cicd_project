import path from 'node:path';


export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    // baseUrl:'https://the-internet.herokuapp.com/',

    baseUrl: 'https://the-internet.herokuapp.com/login',

}
