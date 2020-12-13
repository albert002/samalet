import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import { Layout, Card, Typography  } from 'antd';
import { useStoreContext } from '../../store/storeContext';
import styles from './styles.module.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

export default function Libraries() {
  const { libraryId } = useParams();
  const { state } = useStoreContext();

  const libraries = state.data.filter(el => el.territory.trim() === libraryId);
  
  if(state.data.length > 0 && libraries.length === 0) return <Redirect to="/error/404" />

  return (
    <Layout>
      {libraries.map(el => (
        <Card title={<Title level={2}>{el.fullname}</Title>} bordered={false} className={styles.card} key={el.order}>
          {Object.entries(el).map(([key, value]) => (
            <div key={key}>
              <Layout>
                <Sider theme="light" width="300" className={styles.sider}>{key}</Sider>
                <Content className={styles.content}>{value}</Content>
              </Layout>
              <hr />
            </div>
          ))}
        </Card>
      ))}
    </Layout>
  );
}
