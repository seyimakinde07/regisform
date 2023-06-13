import { Image } from "react-bootstrap";
// import hod_logo_transparent from "../../assets/Hod_logo.png"

const HodLogo = ({ width, height }: any) => {
    const logoWidth = width ? width : '120px';
    const logoHeight = height ? height : '100px';
    return <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BQBSgTnY1GThVOCGbIZWfwE5L2GYJedRiMqpXOOOZA&s"
        alt={'HOD LOGO'}
        style={{
            height: logoHeight,
            width: logoWidth,
            margin: 'auto'
        }}
    />
}

export default HodLogo;