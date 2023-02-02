import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailOptionJoinColumn1675339004010 implements MigrationInterface {
    name = 'DetailOptionJoinColumn1675339004010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "UQ_e83149aca9ac7b7eedbad3ac43d" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "FK_e83149aca9ac7b7eedbad3ac43d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "FK_e83149aca9ac7b7eedbad3ac43d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "UQ_e83149aca9ac7b7eedbad3ac43d"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP COLUMN "userId"`);
    }

}
