# Use the official PostgreSQL version 16 image as a base
FROM postgres:16

# Install build dependencies for compiling the `hll` extension
RUN apt-get update \
    && apt-get install -y \
    build-essential \
    postgresql-server-dev-16 \
    git \
    && rm -rf /var/lib/apt/lists/*

# Clone the `hll` extension from the official GitHub repository
RUN git clone https://github.com/citusdata/postgresql-hll.git \
    && cd postgresql-hll \
    # If there is a specific branch or tag supporting PostgreSQL 16, check it out
    # && git checkout tags/v16-compatible
    # Attempt to build and install the `hll` extension
    && make USE_PGXS=1 \
    && make USE_PGXS=1 install

# Cleanup
RUN apt-get purge -y build-essential git postgresql-server-dev-16 \
    && apt-get autoremove -y \
    && apt-get clean

# Expose the PostgreSQL port
EXPOSE 5432

# Set the default command to run when starting the container
CMD ["postgres"]
