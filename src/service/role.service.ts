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
        return repository.save(role)
    }
     async putRole(role:Role)
    {
        return repository.save(role)
    }
    async deleteRole(roleId: number)
    {
        return repository.delete({id:roleId})
    }
}
