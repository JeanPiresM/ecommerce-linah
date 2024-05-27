import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{marginTop: 100, backgroundColor: '#0B0B0F'}} className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p style={{ color:'#898CA9'}} className='pt-2'>
                <strong>Inscreva-se na nossa newsletter!</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput style={{backgroundColor: '#1A1B23', borderColor: '#1A1B23', borderRadius: 100}} type='text' id='form5Example2' label='' contrast />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn style={{ borderColor: '#933FFE'}} outline color='light'>
                Inscreva-se
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#898CA9' }}>
        &copy; {new Date().getFullYear()} Trabalho Final React | Serratec
      </div>
    </MDBFooter>
  );
}