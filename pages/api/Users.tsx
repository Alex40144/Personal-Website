import prisma from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import assert from 'assert';
const saltRounds = 10;
const jwtSecret = process.env.jwtSecret;

async function findUser(email: string){
    const result = await prisma.users.findUnique({
        where: {
            email: email,
        },
    })
    return result;
}

async function createUser(name: string, email: string, password: string){
    const hash = await bcrypt.hash(password, saltRounds)
    const result = prisma.users.create({
        data: {
            email: email,
            name: name,
            password: hash,
        },
    })
    return result;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // check if we have all data.
        // The website stops this, but just in case
        try {
            assert.notStrictEqual(null, req.body.email, 'Email required');
            assert.notStrictEqual(null, req.body.password, 'Password required');
        } catch (bodyError) {
            res.status(403).json({error: true, message: bodyError.message});
        }
        var name = req.body.name
        const email = req.body.email;
        const password = req.body.password;

        var user = await findUser(email)
        if (!user) {
            // proceed to Create
            var creationResult = await createUser(name, email, password)
                .catch(e => {
                    console.log(e)
                    res.json(e)
                })
            console.log(creationResult)
            if (creationResult) {
                const user = creationResult;
                const token = jwt.sign(
                    {userId: user.name, email: user.email},
                    jwtSecret,
                    {
                    expiresIn: 3000, //50 minutes
                },
            );
            res.status(200).json({token});
            return;
            }
            res.json(creationResult)
        } else {
            // User exists
            res.status(403).json({error: true, message: 'Email already exists'});
            return;
        }
    }
};