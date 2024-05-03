/*
 *  Route Rest Api  
 */

//export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

    const data = {
        status: 'Ok',
        message: 'Esto es un api rest desde next.js 14',
        count: 100
    }

    return Response.json({ data })
}