import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

async function findData(id: number){
    console.log(id)
    const result = await prisma.data.findMany({
        where: {
            user: id,
        },
    })
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    var { userId } = req.query
    if (req.method === 'GET') {
        
        var data = await findData(parseInt(userId.toString()))
        res.json(data)
    }
};