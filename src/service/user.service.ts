import {myDataSource} from '../appDataSource'
import { User } from '../model/user.entity'
import { IUser } from '../interface/Iuser'


const repository = myDataSource.getRepository("User");
export class UserService implements IUser
{
     async  getAllUsers()
    {
        return repository.find()
    }
    async getUser(id: string)
    {
        return repository.createQueryBuilder('u').innerJoinAndSelect('u.company','company').andWhere({authId:id}).getOne()
    }
     async postUser(user: User)
    {
        return repository.save(user)
    }
     async putUser(user:User)
    {
        return repository.save(user)
    }
    async deleteUser(userId: number)
    {
        return repository.delete({id:userId})
    }
}
