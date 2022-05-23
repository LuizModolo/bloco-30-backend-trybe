import { model as createModel } from 'mongoose';
import { WorldCupSchema, IWorldCup } from '../Schemas/worldCup';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCup>(
    'tournaments',
    WorldCupSchema,
  )) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    const worldCups = await this.worldCupModel.find();
    return worldCups;
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCup[] | undefined> {
    const worldCup = await this.worldCupModel.find({ year });
    return worldCup;
  }

  public async insertWorldCup(
    worldCupData: IWorldCup,
  ): Promise<IWorldCup | unknown> {
    const worldCup = await this.worldCupModel.create(worldCupData);
    return worldCup;
  }
}

export default WorldCupModel;