import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

async function findData(id: string){
    var result = await prisma.data.findMany({
        where: {
            userId: id,
        },
    })
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    var id = req.query.id.toString()
    console.log(id)
    if (req.method === 'GET') {
        var data = await findData(id)
        console.log(data)
        res.json(data)
    }
};