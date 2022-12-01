import {myDataSource} from '../appDataSource'
import { Company } from '../model/company.entity'
import { ICompany } from '../interface/Icompany'


const repository = myDataSource.getRepository("Company");
export class CompanyService implements ICompany
{
     async  getAllCompanys()
    {
        return repository.find()
    }
    async getCompany(companyId: number)
    {
        return repository.findOneBy({id:companyId})
    }
     async postCompany(company: Company)
    {
        return repository.save(company)
    }
     async putCompany(company:Company)
    {
        return repository.save(company)
    }
    async deleteCompany(companyId: number)
    {
        return repository.delete({id:companyId})
    }
}
