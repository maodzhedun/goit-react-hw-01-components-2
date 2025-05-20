import PropTypes from "prop-types";
import {Wrapper, List, Item } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};


Statistics.protoType ={
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}