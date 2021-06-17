import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

async function findData(id: string){
    var result = await prisma.data.findMany({
        where: {
            ownerId: id,
        },
    })
    console.log(result)
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    var id = req.query.id.toString()
    if (id == 'undefined'){
        res.status(500).json({error: true, message: 'no id sent with request'});
        return;
    }
    if (req.method === 'GET') {
        var data = await findData(id)
        console.log(data)
        res.json(data)
    }
};