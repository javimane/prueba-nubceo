import { Request, Response } from 'express';
import directorRepository from '../repositories/directorRepository'

//POST /api/directors/
export const createDirector = async (req: Request, res: Response) => {
    try {
      const { name, age, gender } = req.body;
  
        // Call the repository function to create the director
    const newDirector = await directorRepository.createDirector(name, age, gender);
  
     // We respond with the film created
      res.json(newDirector);
    } catch (error: any) {
      res.status(500).json({ message: error.message});
    }
  };