import { Typography } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Entities from "./Entities";
import Keywords from "./Keywords";
import SentenceWiseAnalysis from "./SentenceWiseAnalysis";

const TabsContainer = ({ data }: { data: any }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mb: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Keywords" />
          <Tab label="Named Entities" />
          <Tab label="Sentence wise analysis" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Keywords keywords={data.keywords} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Entities entities={data.entities} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SentenceWiseAnalysis polaritySentence={data.polarity_sentence} />
      </TabPanel>
    </Box>
  );
};

export default TabsContainer;
