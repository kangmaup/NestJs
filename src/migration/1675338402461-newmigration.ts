import { MigrationInterface, QueryRunner } from "typeorm";

export class newmigration1675338402461 implements MigrationInterface {
    name = 'newmigration1675338402461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detail" ("id" integer NOT NULL, "identityType" "public"."detail_identitytype_enum" NOT NULL DEFAULT 'KTP', "identityNumber" character varying NOT NULL, "dateOfBirth" date NOT NULL DEFAULT NOW(), "placeOfBirth" character varying NOT NULL, "country" character varying NOT NULL, "province" character varying NOT NULL, "regency" character varying NOT NULL, "village" character varying NOT NULL, "street" character varying NOT NULL, CONSTRAINT "PK_28de27ee9ae6103af88ab1b3c0c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "detail"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
