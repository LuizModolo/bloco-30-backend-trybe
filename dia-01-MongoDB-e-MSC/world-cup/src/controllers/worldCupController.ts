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

  public getWorldCupByYear = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { year } = req.params;
    try {
      const worldCup = await this.worldCupService
        .getWorldCupByYear(Number(year));

      if (worldCup?.length === 0) {
        return res.status(404).json({ error: this.notFoundError });
      }
      return res.status(200).json(worldCup);
    } catch (error) {
      return res.status(500).json({ error: this.serverError });
    }
  };

  public insertWorldCup = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body: worldCupData } = req;
    try {
      const worldCup = await this.worldCupService.insertWorldCup(worldCupData);
      return res.status(201).json(worldCup);
    } catch ({ _message }) {
      if (_message === 'tournaments validation failed') {
        return res.status(400).json({ error: _message });
      }
      return res.status(500).json({ error: this.serverError });
    }
  };
}

export default WorldCupController;