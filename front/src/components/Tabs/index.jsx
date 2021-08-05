import { useLocation, useHistory } from 'react-router-dom';
import { TabsContainer, Tab, BottomBorder } from './styles';

const Tabs = ({ tabs }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const currentPath = pathname.split('/').reverse()[0];
  const onTabClick = (path) => {
    if (currentPath) {
      history.push(`${pathname.replace(currentPath, path)}`);
    } else {
      history.push(`/profissao/desenvolvedor/${path}`);
    }
  };
  return (
    <>
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
      <BottomBorder />
    </>
  );
};

export { Tabs };
