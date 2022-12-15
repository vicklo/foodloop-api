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
        if(!user.authId)
            return Promise.reject("Authid is missing")
        if(!user.firstName)
            return Promise.reject("Firstname is missing")
        if(!user.lastName)
            return Promise.reject("Lastname is missing")
        return repository.save(user)
    }
     async putUser(user:User)
    {
        if(!user.id)
            return Promise.reject("Id is missing")
        if(!user.authId)
            return Promise.reject("Authid is missing")
        if(!user.firstName)
            return Promise.reject("Firstname is missing")
        if(!user.lastName)
            return Promise.reject("Lastname is missing")

        return repository.save(user)
    }
    async deleteUser(userId: number)
    {
        return repository.delete({id:userId})
    }
}
