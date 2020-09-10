import React from "react";
import Arweave from 'arweave';

export default class ArWallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: props.wallet,
      arweave: null,
      balance: null,
      lastTxId: null,
      lastTx: null,
      lastTxStatus: null
    }
  }

  async componentDidMount() {
    let arweave = Arweave.init();
    let balance = arweave.ar.winstonToAr(await arweave.wallets.getBalance(this.state.wallet));
    let lastTxId = await arweave.wallets.getLastTransactionID(this.state.wallet);

    let lastTx = await arweave.transactions.get(lastTxId);
    console.log(lastTx);

    let lastTxStatus = await arweave.transactions.getStatus(lastTxId);

    this.setState({
      arweave,
      balance,
      lastTxId,
      lastTx,
      lastTxStatus
    });
  }
  
  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {
    delete this.state
  }

  render() {

    let element = (
        <div className="ar-wallet" style={{border: '2px solid #cccece', textAlign: 'center', width: '400px', padding: '20px'}}>
          <img src="https://media.tenor.com/images/0bc41ba5d5dc92a901cde8473dde16f9/tenor.gif" style={{width: '42px'}} />
        </div>
    );

    if (this.state.arweave != null || this.state.arweave != undefined) {
      element = (
        <div className="ar-wallet" style={{border: '2px solid #cccece', textAlign: 'center', width: '400px', padding: '20px'}}>
          <span className="amount" style={{fontSize: '24px'}}>{this.state.balance}</span><span className="currency" style={{fontSize: '16px'}}>AR</span>
          <div className="wallet" style={{fontSize: '14px'}}>{this.state.wallet}</div>
          <br />
          <h6>Last Transaction</h6>
          <table style={{textAlign: 'center', borderCollapse: 'collapse'}}>
            <tbody>
              <tr>
                <th style={{fontSize:'9px', padding: '5px', backgroundColor: '#cccece'}}>ID</th>
                <th style={{fontSize:'9px', padding: '5px', backgroundColor: '#cccece'}}>Amount</th>
                <th style={{fontSize:'9px', padding: '5px', backgroundColor: '#cccece'}}>Fee</th>
                <th style={{fontSize:'9px', padding: '5px', backgroundColor: '#cccece'}}>Status</th>
              </tr>
              <tr>
                <td style={{fontSize: '14px', padding: '5px'}}>
                  <a target="_blank" href={"https://viewblock.io/arweave/tx/" + this.state.lastTxId}>
                    {this.state.lastTxId.substr(0, 6) + "..."}
                  </a>
                </td>
                <td style={{fontSize: '14px', padding: '5px'}}>
                  {this.state.arweave.ar.winstonToAr(this.state.lastTx.quantity)}
                </td>
                <td style={{fontSize: '14px', padding: '5px'}}>
                  {this.state.arweave.ar.winstonToAr(this.state.lastTx.reward)}
                </td>
                <td style={{fontSize: '14px', padding: '5px'}}>
                  {(this.state.lastTxStatus.status == 200) ? "Success" : "Failed"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return element;
  }
}
