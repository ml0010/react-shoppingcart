import './edit-button.css'

export const EditButton = ({ onClick }) => {

    return (
        <div className='button-wrapper'>
            <button className='edit-button' onClick={onClick}>EDIT</button>
        </div>
    )
}
export default EditButton;
