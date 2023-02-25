import { Container, Row, Col } from "react-bootstrap";

const TextWithImageOne = () => {
  return (
    <div className="text-image-section space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="heading-s1 space-mb--20">
              <h2>What is ETH?</h2>
            </div>
            <p>
              ETH, or Ethereum, is a popular cryptocurrency that offers a number of advantages to buyers. Firstly, using ETH for purchases can provide an extra layer of security, as transactions are recorded on a decentralized public ledger that is nearly impossible to tamper with. Additionally, because Ethereum is not controlled by any central authority, transactions can be processed quickly and with low fees.
            </p>
            <p>
              Using ETH for purchases can also offer greater privacy compared to traditional payment methods. ETH transactions do not require the disclosure of personal information, such as credit card details or bank account numbers, which can help protect buyers from identity theft or fraud.
            </p>            
            <p>
              Furthermore, because Ethereum is a global currency, it can be used to purchase goods and services from anywhere in the world, without the need for currency exchange fees or conversion rates.
            </p>            
            <p>
              At the end of the day, using ETH to make purchases can be a convenient, secure, and cost-effective option for buyers who value privacy and global accessibility."
            </p>            
          </Col>        
        </Row>
      </Container>      
      
      <Container className="space-pt--r100">
        <Row className="align-items-center">
          <Col>
            <div className="heading-s1 space-mb--20">
              <h2>How to use ETH?</h2>
            </div>
            <p>
              Using MetaMask with ETH enables you to securely store and manage your cryptocurrency, as well as easily connect to web apps and interact with the Ethereum blockchain.
            </p>
            <p>
              You can check this youtube tutorial on how to setup your MetaMask wallet: <a href="https://www.youtube.com/watch?v=afATAw7iuUM">https://www.youtube.com/watch?v=afATAw7iuUM</a>
            </p>       
            <p>
              In order to detect the MetaMask wallet, you have to refresh the website.
            </p>     
          </Col>        
        </Row>
      </Container>

      <Container className="space-pt--r100">
        <Row className="align-items-center">
          <Col>
            <div className="heading-s1 space-mb--20">
              <h2>How to buy ETH?</h2>
            </div>
            <p>
              Buying cryptocurrency with MetaMask has never been easier. Just head on over to the "Buy" button to get started. 
            </p>
            <p>
              You can check this youtube tutorial on how to buy eth using your credit card using the MetaMask wallet: <a href="https://www.youtube.com/watch?v=afATAw7iuUM"> https://www.youtube.com/watch?v=afATAw7iuUM </a>            
            </p>            
          </Col>        
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
