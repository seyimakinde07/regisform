
import { Row, Col } from 'react-bootstrap'
const AuthContainer = ({ children }: any) => {
    return (
        <Row className='auth-container'>
            {children}
        </Row>
    );
}
export default AuthContainer;