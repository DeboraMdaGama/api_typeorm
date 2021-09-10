import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateProducts1631241993720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"product",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "decimal(10,2)",
                    },
                    {
                        name: "quantity",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKUserProduct",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SEt NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable("product");
    }

}
