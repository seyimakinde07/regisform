import HodButton from '../../layout/hod-button'

const NextButton = ({
    isDisabled,
    goToNextPage,
    containerWidth,
    buttonText
}: {
    isDisabled: Boolean,
    goToNextPage: Function,
    containerWidth: string,
    buttonText: string
}) => {
    return (
        <div
            className="next-button-wrapper"
            style={{ width: containerWidth }}
        >
            <div className="button">
                <HodButton
                    title={buttonText}
                    disabled={isDisabled}
                    onClick={goToNextPage}
                />
            </div>
        </div>
    )
}

export default NextButton
