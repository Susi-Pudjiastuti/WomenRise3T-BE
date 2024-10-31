const jwt = require('jsonwebtoken')

module.exports = {
    validateToken: (req,res,next) => {
        //ambil header
        const header = req.headers.authorization
        //header dipisah untuk mengambil token & cek jika ada header. jika tdk ada header return undefined
        // console.log(header)
        const token = header && header.split(" ")[1]

        if(!token) { return res.sendStatus(401)}

        //verify token
        jwt.verify(token, process.env.PRIVATE_KEY, (error, payload) => {
            console.log(error)
            if (error) return res.sendStatus(403)
            req.payload = payload
            next()
        })
    }

}