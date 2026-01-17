

import express from "express"
import appRoutes from "./routes/app.js"


const PORT = 3_000


export function main() {

	const app = express()

	app.set( "view engine", "ejs" )
	app.set( "views", './src/views' )
    app.use(express.static('public'))


	app.use( appRoutes )

	app.use( ( req, res, next ) => {
		res.status( 404 ).render( "error404" )
	} )

	app.listen( PORT, () => console.info( `App is ready at: ${ PORT }` ) )
}
