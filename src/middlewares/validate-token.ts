import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
                                                      
const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']


    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Try if Has token
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'Token no valid'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Access denied you must log in'
        })
    }

}

export default validateToken;