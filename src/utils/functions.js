import React from 'react';

export const checkReturnTo = h => {
  let returnTo = '';
  try {
    returnTo = h.location.search;
    if (returnTo) {
      returnTo = returnTo.substr(8);
    }
  } catch (e) {}
  return returnTo;
};

export const getIcon = identifier => {
  const iconsClassForIdentifier = {
    s3a: { className: 's3a', title: 'Amazon S3' },
    gs: { className: 'gcs', title: 'Google Cloud Storage' },
    hdfs: { className: 'hdfs', title: 'HDFS' },
    sftp: { className: 'sftp', title: 'SFTP' },
    jdbc: { className: 'jdbc', title: 'JDBC' },
    cloud_warehouse: { className: 'cloud_warehouse', title: 'Cloud Warehouse' },
    no_sql: { className: 'no_sql', title: 'NoSQL Database' },
    json: { className: 'json', title: 'JSON' },
    tsv: { className: 'tsv', title: 'TSV' },
    avro: { className: 'avro', title: 'AVRO' },
    csv: { className: 'csv', title: 'CSV' },
    orc: { className: 'orc', title: 'ORC' },
    txt: { className: 'txt', title: 'TXT' },
    excel: { className: 'excel', title: 'Excel' },
    parquet: { className: 'parquet', title: 'PARQUET' },
    xml: { className: 'xml', title: 'XML' },
    postgres: { className: 'postgres', title: 'PostgreSQL' },
    mysql: { className: 'mysql', title: 'MySQL' },
    bigquery: { className: 'bigquery', title: 'Bigquery' },
    cassandra: { className: 'cassandra', title: 'Cassandra' },
    mongodb: { className: 'mongodb', title: 'MongoDB' },
  };
  return iconsClassForIdentifier[identifier] &&
    Object.prototype.toString.call(iconsClassForIdentifier[identifier]) ===
      '[object Object]'
    ? iconsClassForIdentifier[identifier]
    : {};
};

export const parseValidJSONString = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

export const getIDTableAttribute = ({
  index = null,
  page = null,
  size = null,
}) => {
  if (page === 1) return <>{index + 1}</>;
  else return <>{index + 1 + size * (page - 1)}</>;
};

export const pxToRem = (target, baseFontSize = 16) => {
  return (target / baseFontSize) * 1 + 'rem';
};
