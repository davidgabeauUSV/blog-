class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

render() {
  return (
    <div>
      <ul ClassName="list-group">
          <p>Bitcoin is currently &nbsp;
          {this.props.bpi.USD.rate} &nbsp;
          {this.props.bpi.USD.code} </p>
      </ul>
    </div>
    );
  }
}

export default Prices;
