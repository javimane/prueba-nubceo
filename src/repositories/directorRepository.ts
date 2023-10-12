import { Director } from "../models/director";

class DirectorRepository{

    async createDirector (name: string, age: number, gender: string) {
        try {
          const newDirector = await Director.create({
            name,
            age,
            gender,
          });
      
          // Return the created director
          return newDirector;
        } catch (error) {
          throw new Error('Error creating Director');
        }
      };
}
export default new DirectorRepository();