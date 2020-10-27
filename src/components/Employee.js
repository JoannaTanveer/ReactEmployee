import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import API from "../utils/API";

class Employee extends React.Component {
    state ={
        loading: true,
        filter: '',
        sort: ''

    };

    componentDidMount() {
        this.search("?results=200&nat=us");
    };

    search = query => {
        API.initialSeed(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

   
    handleFormSubmit = event => {
        event.preventDefault();
        this.search(this.state.search);
    };


    render() {
        return (
          <Container>
            <Row>
              <Col size="md-8">
                <Card
                  heading={this.state.results.name.first || "Search for a Movie to Begin"}
                >
                  {this.state.result.Title ? (
                    <EmployeeDetail
                      nameF={this.state.results.name.first} nameL= {this.state.results.name.last}
                      email={this.state.results.email}
                      username={this.state.results.login.username}
                      gender={this.state.results.gender}
                      src={this.state.results.picture.thumbnail}
                    />
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Card>
              </Col>
              <Col size="md-4">
                <Card heading="Search">
                  <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default Employee;