import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import assert from 'assert';

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
        try {
            assert.notStrictEqual(null, req.body.email, 'Email required');
            assert.notStrictEqual(null, req.body.password, 'Password required');
        } catch (bodyError) {
            res.status(403).json({error: true, message: bodyError.message});
        }
        
        var data = await findData(parseInt(userId.toString()))
        res.json(data)
    }
};