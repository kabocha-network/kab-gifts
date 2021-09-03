import { Row, Col, Card, Image } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import config from '../../../config';
export default function Claimed ({ accountAddress, nft }) {
  console.log(config.NFT_PREVIEW_URL);
  const previewUrl = new URL(`collectibles/statemine/${nft.classId}/${nft.instanceId}`, config.NFT_PREVIEW_URL);
  return (
    <>
      <Card.Body className="d-flex flex-column">
        <CardHeader
          title={'You broke the wall!'}
          cardText={`Congratulations! You have successfully claimed a limited edition NFT by ${nft?.artist}.`}
        />
        <Col className="pt-4 d-flex justify-content-center align-items-center">
          <Image className="w-100 nft" src={nft?.art} />
        </Col>
        <div className="flex-grow-1" />
        <Col className="pt-5 d-flex justify-content-center align-items-center">
          <a
            className="btn btn-primary"
            href={previewUrl}
            target="_blank"
            rel="noreferrer">
            See NFT on Singular
          </a>
        </Col>
      </Card.Body>
    </>
  );
}
