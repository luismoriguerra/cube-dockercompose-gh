#!/bin/bash

# Database credentials
DB_USER="crowd"
DB_HOST="127.0.0.1"
DB_PORT="5000"
DB_NAME="crowd"

# Password for the PostgreSQL user
# export PGPASSWORD="crowd"

# File to store the dump
DUMP_FILE="./sql_scripts/02_create_db.sql"

# Dump the schema only
pg_dump -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -s > "$DUMP_FILE"

echo "Dump created successfully"
