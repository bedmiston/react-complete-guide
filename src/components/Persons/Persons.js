import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor');
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('[Persons.js] Inside componentWillReceiveProps', props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[Persons.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Persons.js] Inside componentWillUpdate',
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Persons.js] Inside componentDidUpdate', prevProps, prevState);
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          position={index}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
