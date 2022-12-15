import {myDataSource} from '../appDataSource'
import { Role } from '../model/role.entity'
import { IRole } from '../interface/Irole'


const repository = myDataSource.getRepository("Role");
export class RoleService implements IRole
{
     async  getAllRoles()
    {
        return repository.find()
    }
    async getRole(roleId: number)
    {
        return repository.findOneBy({id:roleId})
    }
     async postRole(role: Role)
    {
        if(!role.name)
            return Promise.reject("Name is missing")
        if(!role.roleDiscription)
            return Promise.reject("Role description is missing")
        return repository.save(role)
    }
     async putRole(role:Role)
    {
        if(!role.id)
            return Promise.reject("Id is missing")
        if(!role.name)
            return Promise.reject("Name is missing")
        if(!role.roleDiscription)
            return Promise.reject("Role description is missing")

        return repository.save(role)
    }
    async deleteRole(roleId: number)
    {
        return repository.delete({id:roleId})
    }
}
