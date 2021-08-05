import { useLocation, useHistory } from 'react-router-dom';
import { TabsContainer, Tab } from './styles';

const Tabs = ({ tabs }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const currentPath = pathname.split('/').reverse()[0];
  const onTabClick = (path) => {
    history.replace(`${pathname.replace(currentPath, path)}`);
  };
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          onClick={() => onTabClick(tab.path)}
          selected={tab.path === currentPath}
        >
          {tab.name}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export { Tabs };
