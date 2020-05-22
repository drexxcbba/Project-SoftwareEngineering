import React, { Component } from "react";
import lodash from "lodash";
import { Segment, Item, Container } from "semantic-ui-react";
import { http } from "../../services";

class Home extends Component {
  constructor() {
    super();
    this.state = { posts: [], loading: true };
  }

  componentDidMount() {
    Promise.all([
      http.request({ url: "/users/posts" }),
      http.request({ url: "/users/users" }),
    ])
      .then(([posts, users]) => {
        const usersById = lodash.keyBy(users, "id");
        const postsWithUsers = posts.map(({ userId, ...post }) => ({
          user: usersById[userId],
          ...post,
        }));
        this.setState({ posts: postsWithUsers });
      })
      .catch((error) => {
        //should show error, for now just alerting in console
        console.error(error);
      })
      .finally(this.setState({ loading: false }));
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <Container>
        <Segment loading={loading}>
          <Item.Group>
            {posts.map(
              ({
                id,
                title,
                body,
                user: {
                  name,
                  email,
                  company: { name: company },
                },
              }) => (
                <Item key={id}>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">{title}</Item.Header>
                    <Item.Meta>
                      {name} <br />
                      <a href={`mailto:${email}`}>{email}</a>
                    </Item.Meta>
                    <Item.Description>{body}</Item.Description>
                    <Item.Extra>Company: {company}</Item.Extra>
                  </Item.Content>
                </Item>
              )
            )}
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

export default Home;
