const HodButton = ({ title, disabled, onClick }: any) => {
    return (
        <>

            <button
                style={{
                    width: '100%',
                    height: '50px',
                    fontWeight: 'bold',
                    backgroundImage: 'linear-gradient(to right, rgb(201 30 38) , rgb(48 50 109))',
                    border: 'none'
                }}
                type="button"
                className="btn btn-primary"
                disabled={disabled ? disabled : false}
                onClick={onClick}
            >{title}</button>
        </>
    )
}

export default HodButton;