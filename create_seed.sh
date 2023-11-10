#!/bin/bash

# Database credentials
DB_USER="postgres"
DB_HOST="127.0.0.1"
DB_PORT="5432"
DB_NAME="crowd_v1"

# Password for the PostgreSQL user
export PGPASSWORD="postgres"

# File to store the dump
DUMP_FILE="crowd.sql"

# Dump the schema only
pg_dump -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -s > "$DUMP_FILE"

# Function to fetch and append 3 rows from each table
# fetch_data() {
#     psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "\dt" | cut -d '|' -f 2 | while read -r table; do
#         if [[ ! -z "$table" ]]; then
#             echo "COPY (SELECT * FROM $table LIMIT 3) TO STDOUT WITH CSV HEADER;" | psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" | csvsql --no-inference --tables "$table" --insert | sed '1d' >> "$DUMP_FILE"
#         fi
#     done
# }

# # Fetch data and append to the dump file
# fetch_data

echo "Dump created successfully"
