---
id: "22040613304914-replication-is-not-backup"
title: Database replication is not a backup solution
---

Replication alone is not sufficient for backup. It assists in protecting against hardware failure on the primary server, but does not protect against data loss. An accidental or malicious `DROP DATABASE` or `TRUNCATE TABLE` statement will be replicated onto the replicas as well.

You can use replication to help with taking backups in some situations when the primary server can't take the additional load of doing a backup, or can't be locked to make the backup data good.

However, if you are doing this you need to be really careful that the data on the replica is precisely in sync with that on the primary.

---

### Sources

- [MariaDB docs](https://mariadb.com/kb/en/replication-as-a-backup-solution/)
