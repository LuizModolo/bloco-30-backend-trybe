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
}

export default WorldCupModel;