import {myDataSource} from '../appDataSource'
import { Company } from '../model/company.entity'
import { ICompany } from '../interface/Icompany'
import { ObjectLiteral, Repository } from 'typeorm';


export class CompanyService implements ICompany
{
    private repository;
    constructor(rep: Repository<ObjectLiteral> = myDataSource.getRepository("Company"))
    {
        this.repository = rep
    }
     async  getAllCompanys()
    {
        return this.repository.find()
    }
    async getCompany(companyId: number)
    {
        return this.repository.findOneBy({id:companyId})
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
        return this.repository.save(company)
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

        return this.repository.save(company)
    }
    async deleteCompany(companyId: number)
    {
        return this.repository.delete({id:companyId})
    }
}
