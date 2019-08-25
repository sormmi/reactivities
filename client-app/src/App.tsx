import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';

const App: React.FC = () => {
  const [values, setValues]: any[] = useState([]);

  const fetchValues = async () => {
    const response = await axios.get('http://localhost:5000/api/values');
    setValues(response.data);
  };

  useEffect(() => {
    fetchValues();
  }, []);

  return (
    <div>
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      <List>
        {values.map((val: any) => (
          <List.Item key={val.id}>{val.name}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
