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
        if(!company.adress)
            return Promise.reject("Adress is missing")
        if(!company.name)
            return Promise.reject("Name is missing")
        if(!company.type)
            return Promise.reject("Type is missing")
        if(!company.postCode)
            return Promise.reject("Postcode is missing")
        return repository.save(company)
    }
     async putCompany(company:Company)
    {
        if(!company.id)
            return Promise.reject("Id is missing")
        if(!company.adress)
            return Promise.reject("Adress is missing")
        if(!company.name)
            return Promise.reject("Name is missing")
        if(!company.type)
            return Promise.reject("Type is missing")
        if(!company.postCode)
            return Promise.reject("Postcode is missing")

        return repository.save(company)
    }
    async deleteCompany(companyId: number)
    {
        return repository.delete({id:companyId})
    }
}
