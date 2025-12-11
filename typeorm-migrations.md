# TypeORM Migrations & Seeding — Reflection

This document explains what database migrations are in TypeORM, how they differ from seeding, and why version-controlling schema changes is important.

---

## 1. What is the purpose of database migrations in TypeORM?

Database migrations allow you to:

1. Save and track all schema changes in version control.
2. Apply database updates safely across different environments (local, staging, production).
3. Keep developers' databases consistent, even when the schema changes many times.
4. Avoid making manual SQL changes, which can lead to mistakes.

Migrations make sure the database grows and changes in a controlled and predictable way.

---

## 2. How do migrations differ from seeding?

Migrations and seeding serve different purposes:

### **Migrations**

- Change the **structure** of the database  
  (e.g., create tables, add columns, update indexes).
- Are version-controlled and meant to be permanent steps.
- Are required when the application evolves.

### **Seeding**

- Inserts **initial or sample data** into the database  
  (e.g., default users, roles, test products).
- Helps developers or testers use the system with real data.

In short:  
**Migrations change the schema.  
Seeding adds the data.**

---

## 3. Why is it important to version-control database schema changes?

Version-controlling schema changes is important because:

1. Every team member always works with the same database structure.
2. Deployment becomes safer because migrations run in the correct order.
3. It becomes easy to track who changed what and why.
4. You can roll back to a previous schema if something breaks.
5. It prevents manual database edits, which are risky and hard to reproduce.

Without version control, databases across environments can become inconsistent quickly.

---

## 4. How can you roll back a migration if an issue occurs?

TypeORM allows you to roll back the **last migration** by running:

```
typeorm migration:revert
```

This command:

- Reverses the most recent schema change.
- Helps fix mistakes without manually editing the database.
- Allows developers to return to a stable schema state quickly.

If multiple migrations need to be undone, you can run the command multiple times.

Rolling back migrations reduces downtime and makes recovery easier when issues happen.

---

## Summary

TypeORM migrations help keep schema changes organized, safe, and consistent.  
Seeding is useful for adding starting data, and both together make development smoother and easier to maintain.
