import app from "./app";
import config from '../src/config/index';

app.listen(config.port, () => {
    console.log(`your server is running on the port http://localhost:${config.port}`)
})