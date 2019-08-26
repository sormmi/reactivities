import React from 'react';
import { Menu, Container, Dropdown, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const AppTitle = styled.span`
  margin-left: 10px;
  font-size: 1.2rem;
`;

const Navbar = () => {
  return (
    <Menu fixed='top' color='blue' inverted>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' />
          <AppTitle>Reactivites</AppTitle>
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button positive>Create Activity</Button>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>Suomi</Dropdown.Item>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Swedish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Login</Button>
            <Button color='instagram'>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
