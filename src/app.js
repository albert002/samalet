import React, { useEffect } from 'react';
import { Layout, message, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useStoreContext } from './store/storeContext';
import { gettingData } from './store/actions';
import routes from './routes';
import Loading from './components/loading/loading';
import './app.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function App() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    gettingData({ dispatch })
  }, [dispatch]);
  
  useEffect(() => {
    state.error && message.error(state.error)
  }, [state.error]);

  return (
    <Layout className="layout">
      <Header>
        <Link to="/">
          <Title ellipsis className="logo">SamoletTest</Title>
        </Link>
      </Header>

      <Content className="content">
        <div className="site-layout-content">
          {routes()}
        </div>
      </Content>

      <Footer className="footer">Samolet Test ©2020</Footer>

      <Loading />
    </Layout>
  );
}
