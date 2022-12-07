import {myDataSource} from '../appDataSource'
import { User } from '../model/user.entity'
import { IUser } from '../interface/Iuser'


const repository = myDataSource.getRepository("User");
export class UserService implements IUser
{
     async  getAllUsers()
    {
        let counter = 0;
        for (let i = 0; i < 20000; i++) {
            counter++;
            // tslint:disable-next-line:no-console
            console.log(counter)
        }
        return repository.find()
    }
    async getUser(id: string)
    {
        return repository.createQueryBuilder('u').innerJoinAndSelect('u.company','company').andWhere({authId:id}).getOne()
    }
     async postUser(user: User)
    {
        console.log(user)
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
