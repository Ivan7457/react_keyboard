import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  pressedKey: string | null;
};

export class App extends Component<Props, State> {
  state: State = {
    pressedKey: null,
  };

  keyButton = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyButton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyButton);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
