import { MigrationInterface, QueryRunner, QueryRunnerAlreadyReleasedError, Table } from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateUsers1624383867322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    }, {
                        name: "name",
                        type: "varchar"
                    }, {
                        name: "email",
                        type: "varchar"
                    }, {
                        name: "admin",
                        type: "boolean",
                        default: false
                    }, {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]

            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
