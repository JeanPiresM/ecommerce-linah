import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import Arrow from '../assets/arrow.svg'
import Star from '../assets/star.svg'
import Wallet from '../assets/wallet.svg'

export default function Cards() {
  return (
    <MDBRow style={{marginTop: 100, marginRight: 150, marginLeft: 150 }} className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard style={{backgroundColor:'#1A1B23', borderRadius: 20, color: 'white'}}>
          <MDBCardImage style={{width: 80}}
          src={Arrow}
          alt='...'
          position='top'
          className="mx-auto mt-3"
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize: 26, fontWeight: 'bold'}}>Entrega Eficaz</MDBCardTitle>
            <MDBCardText>
            Compre com confiança
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{backgroundColor:'#1A1B23', borderRadius: 20, color: 'white'}}>
          <MDBCardImage style={{width: 80}}
            src={Star}
            alt='...'
            position='top'
            className="mx-auto mt-3"
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize: 26, fontWeight: 'bold'}}>Todo o seu Estilo</MDBCardTitle>
            <MDBCardText>
            Em um só lugar!
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{backgroundColor:'#1A1B23', borderRadius: 20, color: 'white'}}>
          <MDBCardImage style={{width: 80}}
            src={Wallet}
            alt='...'
            position='top'
            className="mx-auto mt-3"
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize: 26, fontWeight: 'bold'}}>Pagamento seguro</MDBCardTitle>
            <MDBCardText>
            100% protegido
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}