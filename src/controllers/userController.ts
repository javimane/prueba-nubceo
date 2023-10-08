import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';



//POST /api/users/
export const newUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validate if the user already exists in the database.
    const user = await User.findOne({ where: { username: username } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    } 
     //We encrypt the password in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Save the user en the database
        await User.create({
            username: username,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

//POST /api/users/login
export const loginUser = async (req: Request, res: Response) => {

    // Get the username and password from the request body.
    const { username, password } = req.body;
  
    // Try to find the user with the specified username.
    const user: any = await User.findOne({ where: { username: username } });
  
    // If the user does not exist, return an error.
    if (!user) {
      return res.status(400).json({
        msg: `No existe un usuario con el nombre ${username} en la base datos`,
      });
    }
  
    // Validate the password.
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(400).json({
        msg: 'Password Incorrecta',
      });
    }
  
    // Generate a JSON Web Token (JWT).
    const token = jwt.sign(
      {
        username: username,
      },
      process.env.SECRET_KEY || 'new12356',
      { expiresIn: '2d' }
    );
  
    // Generate a refresh token.
    const refreshToken = jwt.sign(
      {
        username: username,
      },
      process.env.SECRET_KEY || 'refresh123',
      { expiresIn: '1w' }
    );
  
    // Save the refresh token to the user's record.
    user.refreshToken = refreshToken;
    await user.save();
  
    // Return the JWT and refresh token to the client.
    res.json({
      token,
      refreshToken,
    });
  };

//POST /api/refrestToken
export const refreshToken = async (req: Request, res: Response) => {

    const refreshToken = req.body.refreshToken;
  
    if (!refreshToken) {
      return res.sendStatus(401);
    }
  
    // We verify the refresh token
    try {
      jwt.verify(refreshToken, process.env.SECRET_KEY!);
    } catch (err) {
      return res.sendStatus(403).json({ error: "Invalid refresh token" });
    }
  
    // We get the user from the refresh token
    const user: any = await User.findOne({ where: { refreshToken: refreshToken } });
  
    // We generate a new refresh token
    const newRefreshToken = jwt.sign({
      username: user.username
    }, process.env.SECRET_KEY!, { expiresIn: '1w' });
  
    // We update the refresh token on the user
    user.refreshToken = newRefreshToken;
    await user.save();
  
    // We return the new refresh token
    res.json({ newRefreshToken });
  };

