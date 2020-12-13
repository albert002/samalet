import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Typography, Input, Select, Switch } from 'antd';
import { useStoreContext } from '../../store/storeContext';
import styles from './styles.module.css';

const { Title } = Typography;
const { Option } = Select;

export default function Regions() {
  const { state } = useStoreContext()
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("region");
  const [toggle, setToggle] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSelect = (value) => {
    setSelect(value);
  }

  const handleSwitch = () => {
    setToggle(!toggle);
  }


  const searchedData = search && state.data.filter(el => (
    el.territory.toLowerCase().includes(search.toLowerCase())
  ))
  

  const regions = (searchedData || state.data).reduce((acc, el) => {
    const index = acc.findIndex(region => region.name === el.territory.trim());

    if(index === -1) {
      return [...acc, { name: el.territory.trim(), count: 1, order: el.order}];
    } else {
      return acc.map((region, idx) => idx === index ? {...region, count: region.count + 1 } : region );
    }
  }, [])

  select === "region" && regions.sort((a, b) => (
    toggle 
      ? a.name > b.name ? 1 : -1
      : a.name < b.name ? 1 : -1
  ))
  select === "library" && regions.sort((a, b) => (
    toggle
      ? a.count - b.count
      : b.count - a.count
  ))

  return (
    <div className={styles.root}>

      <div className={styles.header}>
        <Title level={4}>
          {state.data[0] && state.data[0].formname}
        </Title>
      </div>

      <div className={styles.tools}>
        <Input
          placeholder="Поиск по региону"
          value={search}
          className={styles.input}
          onChange={handleChange}
        />
        <Select
          defaultValue={select}
          className={styles.select}
          onChange={handleSelect}
        >
          <Option value="region">Сортировка по регионам</Option>
          <Option value="library">Сортировка по библиотекам</Option>
        </Select>
        <Switch
          checkedChildren="По возрастанию"
          unCheckedChildren="По убыванию"
          className={styles.switch}
          defaultChecked
          onChange={handleSwitch}
        />
      </div>

      {regions.map((region) => (
        <Link 
          to={`/${region.name}`}
          className={styles.cardContainer}
          key={region.order}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Badge count={region.count} offset={[-20, 20]}>
            <Card className={styles.card}>
              <Title level={4}>{region.name}</Title>
            </Card>
          </Badge>
        </Link>
      ))}

    </div>
  );
}
