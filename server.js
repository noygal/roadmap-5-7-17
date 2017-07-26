const server = require('./index')

server({port: process.env.PORT, mountRoute: process.env.MOUNT_ROUTE})
