import { Request, Response } from 'express';
import { Director } from "../models/director";

//POST /api/directors/
export const createDirector = async (req: Request, res: Response) => {
    try {
      const { name, age, gender } = req.body;
  
      // Created the director
      const newDirector = await Director.create({
        name,
        age,
        gender,
      });
  
     // We respond with the film created
      res.json(newDirector);
    } catch (error) {
      throw new Error('Error creating Director');
    }
  };