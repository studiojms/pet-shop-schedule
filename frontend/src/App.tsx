import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'antd/dist/antd.css';
import { Menu, Layout } from 'antd';
import { Router, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';

import CustomerIndexPage from './pages/customer/Index';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
});

const history = createHashHistory();

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Layout>
          <Layout>
            <Layout.Sider width={200}>
              <Menu mode="vertical-left" theme="light" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/customers">Customers</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/customers">Pets</Link>
                </Menu.Item>
              </Menu>
            </Layout.Sider>
            <Layout.Content>
              <Route exact path="/customers" component={CustomerIndexPage} />
            </Layout.Content>
          </Layout>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
