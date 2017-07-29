const server = require('./index')

server({port: process.env.PORT || 3000, mountRoute: process.env.MOUNT_ROUTE || '/entities'})
