# InfluxDB

### Installation
(For MacOS)
```
brew update
brew install influxdb
influxd version
  -> InfluxDB vv1.8.1 (git: master-1.x af0237819ab9c5997c1c0144862dc762b9d8fc25)
```

### Running
*The following 2 commands must be run simultaneously*

```
influxd
  -> starts influxdb server
server runs by default on 8086
influx
  -> starts influxDB client
```

### Key Words
`Measurements` are similar to relational db tables
`Tags` are similar to relational db indexed columns
`Fields` are similar to relational db non-indexed columns
Every measurement entry (or "point") is given a timestamp. A timestamp is automatically assigned to a point if not manually specified.
`Retention Policies` are the part of the InfluxDB data structure that describe for how long InfluxDB keeps data. InfluxDB compares your local server's timestamp to the timestamps on your data and deletes data older than the RP's DURATION. A single database can have several RPs and RPs are unique per database.

### Commands
`SHOW databases` - shows all existing dbs
`CREATE DATABASE <db_name>` - creates a db
`use <db_name>` - specifies the db that will be used for all following commands

Points are written to InfluxDB using the "Line Protocol", which follows the following format:
`<measurement>[,<tag-key>=<tag-value>...] <field-key>=<field-value>[,<field2-key>=<field2-value>...] [unix-nano-timestamp]`
The brackets denote optional values.
Note especially the location of the commas and spaces in the Line Protocol.
Quoting:
- Never double or single quote the timestamp
- Never single quote field values (even if they’re strings!)
- Do not double or single quote measurement names, tag keys, tag values, and field keys. InfluxDB assumes that the quotes are part of the name.
- Do not double quote field values that are floats, integers, or Booleans. InfluxDB will assume that those values are strings
- Do double quote field values that are strings
  Eg.
```
INSERT cpuUsage,host=server2,region=us_east value=0.115,temp=37,running_processes="Outlook,Skype"
INSERT cpuUsage,host=server2,region=us_east value=0.227,temp=41,running_processes="Outlook,Skype,Slack"
INSERT cpuUsage,host=server2,region=us_east value=0.999,temp=99,running_processes="Outlook,Skype,Slack,Chrome" 1222227334291408000 // with timestamp specified
```

`SHOW MEASUREMENTS` - shows all measurements
`DROP MEASUREMENT` - deletes measurement and all its data

### InfluxDB Cloud:
`Bucket`: A bucket is simply the combination of the database name and it’s retention policy. There is no concept of Bucket in InfluxDB v1.x.
