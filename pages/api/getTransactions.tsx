import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

async function findData(id: string){
    const result = await prisma.users.findUnique({
        where: {
            id,
        },
    })
    console.log(result)
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    var id = req.query.id.toString()
    if (req.method === 'GET') {
        var data = await findData(id)
        console.log(data)
        res.json(data)
    }
};