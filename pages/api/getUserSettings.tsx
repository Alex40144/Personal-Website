import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

async function findData(id: number){
    const result = await prisma.users.findMany({
        where: {
            id: id,
        },
    })
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    var userId = req.query.userId
    if (req.method === 'GET') {
        
        var data = await findData(parseInt(userId.toString()))
        res.json(data)
    }
};