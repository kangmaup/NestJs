import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailOptionJoinColumnCustom1675339043976 implements MigrationInterface {
    name = 'DetailOptionJoinColumnCustom1675339043976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "FK_e83149aca9ac7b7eedbad3ac43d"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME COLUMN "userId" TO "user_name"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME CONSTRAINT "UQ_e83149aca9ac7b7eedbad3ac43d" TO "UQ_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD "user_name" character varying`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "FK_e312f38dbdd3c621b21b8b56fde" FOREIGN KEY ("user_name") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "FK_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD "user_name" integer`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde" TO "UQ_e83149aca9ac7b7eedbad3ac43d"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME COLUMN "user_name" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "FK_e83149aca9ac7b7eedbad3ac43d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
