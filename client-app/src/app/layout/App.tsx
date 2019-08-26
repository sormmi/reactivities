import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { List, Container } from 'semantic-ui-react';
import IActivity from './../../models/activity';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const fetchActivities = async () => {
    const response = await axios.get<IActivity[]>('http://localhost:5000/api/activities');
    setActivities(response.data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
};

export default App;
