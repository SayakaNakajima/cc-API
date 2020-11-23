import {MigrationInterface, QueryRunner} from "typeorm";

export class newMG1606123521021 implements MigrationInterface {
    name = 'newMG1606123521021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "glyphs" DROP COLUMN "glyph"`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" ADD "glyph" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" DROP COLUMN "test_grade"`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" ADD "test_grade" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "glyphs" DROP COLUMN "test_grade"`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" ADD "test_grade" character(10) DEFAULT '-'`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" DROP COLUMN "glyph"`, undefined);
        await queryRunner.query(`ALTER TABLE "glyphs" ADD "glyph" character NOT NULL`, undefined);
    }

}
