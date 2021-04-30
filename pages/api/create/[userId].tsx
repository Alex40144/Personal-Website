import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import assert from 'assert';

async function createData(id: number){
    console.log(id)
    const result = await prisma.data.findMany({
        where: {
            user: id,
        },
    })
    return result;
}

export default  async(req: NextApiRequest, res: NextApiResponse) => {
    //data should be like /userId?title=""&value=""&frequency=""&user=""&category=""
    //This should work
    var { data } = req.query
    if (req.method === 'GET') {
        try {
            assert.notStrictEqual(null, req.body.email, 'Email required');
            assert.notStrictEqual(null, req.body.password, 'Password required');
        } catch (bodyError) {
            res.status(403).json({error: true, message: bodyError.message});
        }
        
        var result = await createData(parseInt(data.userId.toString()))
        res.json(result)
    }
};