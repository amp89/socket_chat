const env = process.env


export default {
    mongoU:"stuff",
    mongoP:"things",
    mongodbUri: 'mongodb://usrnm:pwd@localhost:27017/chat',
    saltRounds: 10,
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',

    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
}
