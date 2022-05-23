import { IWorldCup } from '../Schemas/worldCup';
import WorldCupModel from '../models/worldCupModel';

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    const worldCups = await this.worldCupModel.getWorldCups();
    return worldCups;
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCup[] | undefined> {
    const worldCup = await this.worldCupModel.getWorldCupByYear(year);
    return worldCup;
  }

  public async insertWorldCup(
    worldCupData: IWorldCup,
  ): Promise<IWorldCup | unknown> {
    const worldCup = await this.worldCupModel.insertWorldCup(worldCupData);
    return worldCup;
  }
}

export default WorldCupService;