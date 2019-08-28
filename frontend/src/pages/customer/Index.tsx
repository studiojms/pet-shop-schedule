import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Spin, Table, Button } from 'antd';

class CustomerIndexPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const query = gql`
      {
        listCustomers {
          id
          name
          pets {
            name
          }
        }
      }
    `;

    return (
      <Query query={query}>
        {(queryStatus: any) => {
          let result = null;

          if (queryStatus.loading) {
            result = <Spin />;
          } else if (queryStatus.error) {
            console.error(queryStatus.error);
          } else {
            result = (
              <Table
                dataSource={queryStatus.data.listCustomers.map((v: any) => {
                  v.key = v.id;
                  return v;
                })}
              >
                <Table.Column title="Id" dataIndex="id" key="id" />
                <Table.Column title="Name" dataIndex="name" key="name" />
                <Table.Column
                  title="Total Pets"
                  dataIndex="pets"
                  key="pets"
                  render={(pets: Array<any>) => `${pets.length} pets`}
                />
                <Table.Column
                  render={() => (
                    <>
                      <Button type="primary" icon="edit" />
                      <Button type="danger" icon="delete" />
                    </>
                  )}
                />
              </Table>
            );
          }

          return result;
        }}
      </Query>
    );
  }
}

export default CustomerIndexPage;
