import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailJoinColumn1675339754720 implements MigrationInterface {
    name = 'DetailJoinColumn1675339754720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "FK_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME COLUMN "user_name" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME CONSTRAINT "UQ_e312f38dbdd3c621b21b8b56fde" TO "UQ_cc22157935ec728462577696d0c"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "UQ_cc22157935ec728462577696d0c"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "UQ_cc22157935ec728462577696d0c" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "FK_cc22157935ec728462577696d0c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "FK_cc22157935ec728462577696d0c"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP CONSTRAINT "UQ_cc22157935ec728462577696d0c"`);
        await queryRunner.query(`ALTER TABLE "detail" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD "user_id" character varying`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "UQ_cc22157935ec728462577696d0c" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME CONSTRAINT "UQ_cc22157935ec728462577696d0c" TO "UQ_e312f38dbdd3c621b21b8b56fde"`);
        await queryRunner.query(`ALTER TABLE "detail" RENAME COLUMN "user_id" TO "user_name"`);
        await queryRunner.query(`ALTER TABLE "detail" ADD CONSTRAINT "FK_e312f38dbdd3c621b21b8b56fde" FOREIGN KEY ("user_name") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
