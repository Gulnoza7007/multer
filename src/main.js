

import express from "express"
import appRoutes from "./routes/app.js"
import uploads from './routes/upload.js'
import dashboard from './routes/dashboard.js'
import view from './routes/view.js'


const PORT = 3_000


export function main() {

	const app = express()

	app.set( "view engine", "ejs" )
	app.set( "views", './src/views' )
    app.use(express.static('public'))
    app.use('/uploads', express.static('uploads'))


	app.use( appRoutes )
    app.use(uploads)
    app.use(dashboard)
    app.use(view)

	app.use( ( req, res, next ) => {
		res.status( 404 ).render( "error404" )
	} )

	app.listen( PORT, () => console.info( `App is ready at: ${ PORT }` ) )
}
