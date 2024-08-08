const DesktopIcon = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12" stroke="rgb(33, 170, 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 9V3M17.5 3L15 5.5M17.5 3L20 5.5" stroke="rgb(33, 170, 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V20" stroke="rgb(33, 170, 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 20H16" stroke="rgb(33, 170, 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default DesktopIcon;