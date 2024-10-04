import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProduct1724960801520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" 
            ADD COLUMN "wine_collection" varchar,
            ADD COLUMN "grape_variety" varchar,
            ADD COLUMN "vintage" varchar,
            ADD COLUMN "region" varchar,
            ADD COLUMN "alcohol_content" numeric,
            ADD COLUMN "tasting_notes" text,
            ADD COLUMN "serving_temperature" varchar`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" 
            DROP COLUMN "wine_collection",
            DROP COLUMN "grape_variety",
            DROP COLUMN "vintage",
            DROP COLUMN "region",
            DROP COLUMN "alcohol_content",
            DROP COLUMN "tasting_notes",
            DROP COLUMN "serving_temperature"`
        );
    }

}
