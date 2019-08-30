import React from 'react';
import Tabs, { TabsPane, TabsPure } from '../Tabs';
import AnimatedList from '../AnimatedList';
import ArchivesList from '../ArchivesList';

// Dummy Data just for the demo
import { 
  listDummyData, 
  ArchivesListDummyData,
  listDummyDataMusic,
  listDummyDataExperiance
} from '../../utils';

const App = () => {
  return (
    <Tabs 
      title="Browse Site"
      subTitle="SELECT A TAB"
    >
      <TabsPane label="Topics">
        <AnimatedList data={listDummyData} />
      </TabsPane>
      <TabsPane label="Archives">
        <ArchivesList data={ArchivesListDummyData} />
      </TabsPane>
      <TabsPane label="Pages">
        <TabsPure 
          accordion
          selected={"Favorite Albums"}
        >
          <TabsPane label="Favorite Albums">
            <AnimatedList data={listDummyDataMusic} type="SONGS"/>
          </TabsPane>
          <TabsPane label="Lates Experiance">
            <AnimatedList data={listDummyDataExperiance} type="YEARS EXPERIANCE"/>
          </TabsPane>
        </TabsPure>
      </TabsPane>
  </Tabs>
  );
};

export default App;