/* eslint-disable react/no-array-index-key */
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomBorder, Container, Tab, TabsContainer,
} from './styles';

const Tabs = ({ tabs }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const currentPath = pathname.split('/').reverse()[0];
  const currentIndex = tabs.findIndex((tab) => tab.path === currentPath);
  const onTabClick = (path) => {
    if (currentPath) {
      history.push(`${pathname.replace(currentPath, path)}`);
    } else {
      history.push(`${pathname}${path}`);
    }
  };
  return (
    <Container>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            onClick={() => onTabClick(tab.path)}
            selected={tab.path === currentPath}
          >
            {tab.name}
          </Tab>
        ))}
      </TabsContainer>
      <BottomBorder index={currentIndex} />
    </Container>
  );
};

export { Tabs };
