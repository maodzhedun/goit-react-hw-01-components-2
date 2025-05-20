import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Container, Section } from './App.styled';

export const App = () => {
  // console.log(data);
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></Profile>
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
    </Container>
  );
};
