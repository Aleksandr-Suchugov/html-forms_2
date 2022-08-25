import Popover from './popover';
import '../css/style.css';

const popUpMsg = new Popover('Message from host', 'System will reboot in 5 sec...');
popUpMsg.onClick(2500);
