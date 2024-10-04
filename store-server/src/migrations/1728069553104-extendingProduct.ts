import { MigrationInterface, QueryRunner } from "typeorm";

export class ExtendingProduct1728069553104 implements MigrationInterface {
    name = 'ExtendingProduct1728069553104'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product" 
            ADD COLUMN IF NOT EXISTS "wine_collection" varchar,
            ADD COLUMN IF NOT EXISTS "grape_variety" varchar,
            ADD COLUMN IF NOT EXISTS "vintage" varchar,
            ADD COLUMN IF NOT EXISTS "region" varchar,
            ADD COLUMN IF NOT EXISTS "alcohol_content" numeric,
            ADD COLUMN IF NOT EXISTS "tasting_notes" text,
            ADD COLUMN IF NOT EXISTS "serving_temperature" varchar
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product" 
            DROP COLUMN IF EXISTS "wine_collection",
            DROP COLUMN IF EXISTS "grape_variety",
            DROP COLUMN IF EXISTS "vintage",
            DROP COLUMN IF EXISTS "region",
            DROP COLUMN IF EXISTS "alcohol_content",
            DROP COLUMN IF EXISTS "tasting_notes",
            DROP COLUMN IF EXISTS "serving_temperature"
        `);
    }
}
