import { Types } from 'mongoose';

interface UserModel {
  _id: Types.ObjectId;
  login: string;
  address: string;
  time_played: Date;
}

export { UserModel };
