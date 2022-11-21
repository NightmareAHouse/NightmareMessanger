import {Box, Grid} from "@mui/material"
import ChatList from "../component/chat-list/ChatList";
import Chat from "../component/chat/Chat";
import {useState} from "react";
import Autorization from "../component/autorization/Autorization";
import {useChat} from "../hooks/useChat";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
};

const MainPage = () => {
    const messages = useChat(0);

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {open ? (
                <>
                    <Box sx={style}>
                        <Autorization closeModal={handleClose}/>
                    </Box>
                </>
            ) : (
                <>
                    <Grid container sx={{minHeight: '100vh'}}>
                        <Grid xs={2} bgcolor={'#212836'}>
                            <ChatList messages={messages}/>
                        </Grid>
                        <Grid xs={10} bgcolor={'#151e2c'}>
                            <Chat messages={messages}/>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

export default MainPage