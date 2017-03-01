# --- !Ups

create table "people" (
  "id" bigint generated by default as identity(start with 1) not null primary key,
  "name" varchar not null,
  "age" int not null
);

create table "vessel" (
  "id" bigint generated by default as identity(start with 1) not null primary key,
  "name" varchar not null,
  "width" double not null,
  "length" double not null,
  "draft" double not null,
  "latitude" varchar not null,
  "longitude" varchar not null
);

create table "vessel_history" (
  "id" bigint generated by default as identity(start with 1) not null primary key,
  "id_vessel" bigint not null,
  "latitude" varchar not null,
  "longitude" varchar not null,
  "date" timestamp not null
);

# --- !Downs

drop table "people" if exists;
drop table "vessel" if exists;
drop table "vessel_history" if exists;
