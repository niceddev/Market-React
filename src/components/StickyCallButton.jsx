import React, { useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { IoCallOutline } from  'react-icons/io5'

function StickyCallButton() {
    const [icon, toggleIcon] = useState(false);

        setTimeout(()=>{
            toggleIcon(!icon);
        },2000)
    
    return (
        <OverlayTrigger key='top' overlay={<Tooltip>Хотите, перезвоним Вам за 30 секунд?</Tooltip>}>
            <Button className="recallBtn fixed-bottom d-none d-xl-block d-lg-block d-xl-none" variant="outline-warning">
                {
                    icon ? <IoCallOutline size={50}/> : <p>Кнопка связи</p>
                }
            </Button>
        </OverlayTrigger>
    )
}

export default StickyCallButton