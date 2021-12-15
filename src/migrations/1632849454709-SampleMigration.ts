import {MigrationInterface, QueryRunner} from "typeorm";

export class SampleMigration1632849454709 implements MigrationInterface {
    name = 'SampleMigration1632849454709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ANS_UNRELATED_SCHEMAS_DESA"."Sample"."UserSample" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(64) NOT NULL, "description" nvarchar(255), "systemCreateddate" datetime2 NOT NULL CONSTRAINT "DF_03be31081ed8d89355a8b56a939" DEFAULT getdate(), "systemUpdateddate" datetime2 NOT NULL CONSTRAINT "DF_fe4b29a3f6afd878bdd10574b0e" DEFAULT getdate(), "systemDeleteddate" datetime2, "systemIsdisabled" bit NOT NULL CONSTRAINT "DF_4c2d3e115f9102b8fc441aadc00" DEFAULT 0, CONSTRAINT "PK_f3230ac99e27298d7aa26a2b8b5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ANS_UNRELATED_SCHEMAS_DESA"."Sample"."UserSample"`);
    }

}
