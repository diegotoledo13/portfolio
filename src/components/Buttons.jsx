import styled from '@emotion/styled'
import Habilidades from './Habilidades';

const Buttons = ({modal, setModal}) => {

    const handleSubmit = ()=> {
        setModal(true);
    }
    const Button = styled.button`
    width: 100px;
    height: 35px;        
    `
    
  return (
    <div>
    <Button onClick={handleSubmit}>Click</Button>
        {modal && <Habilidades setModal={setModal}/>}
    </div>
  )
}

export default Buttons