import React from 'react';
import Layout from '../shared/Layout';
import Table from '../shared/Table';

const Courses = () => {
  const headers = ['#', 'First', 'Last', 'Handle'];
  const rows = [
    [1, 'Mark', 'Otto', '@mdo'],
    [2, 'Jacob', 'Thornton', '@fat']
  ];

  return (
    <Layout title="Courses">
      <Table headers={headers} rows={rows} />
    </Layout>
  );
};

export default Courses;