import React from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core"

const Footer = ({ muscles, category, handleCategorySelect }) => {
  const index = category ? muscles.findIndex((muscle) => muscle === category) + 1 : 0;

  const onSelect = (e, index) => {
    const category = index === 0 ? "" : muscles[index - 1];
    handleCategorySelect(category);
  }

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onSelect}
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} />
        ))}
      </Tabs>
    </Paper>
  )

}

export default Footer