import { Request, Response } from 'express';
import WorldCupService from '../services/worldCupService';

class WorldCupController {
  constructor(private worldCupService = new WorldCupService()) {}

  serverError = 'Internal Server Error';

  notFoundError = 'Not found any world cup with this field';

  public getWorldCups = async (
    _req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const worldCups = await this.worldCupService.getWorldCups();
      return res.status(200).json(worldCups);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };
}

export default WorldCupController;