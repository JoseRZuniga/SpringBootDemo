import { Migration } from '@mikro-orm/migrations';

export class Migration20230625195855 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "create_at" timestamptz(0) not null, "update_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
