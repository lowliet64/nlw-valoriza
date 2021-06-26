import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateTags1624654059248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tags",
            columns:[{
                name:"id",
                type:"uuid",
                isPrimary:true
            },{
                name:"name",
                type:"varchar",

            },{
                name:"created_at",
                type:"timestamp",
                default:"now()"

            },{
                name:"updated_at",
                type:"timestamp",
                default:"now()"
            }]
        }
               

        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tags")
    }

}
