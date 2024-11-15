export default function AddNewFriends({
  nameValue,
  urlValue,
  onChangeName,
  onChangeUrl,
  onAddDetail,
  onCancel,
}) {
  return (
    <form className="add-new" onSubmit={onAddDetail}>
      <div className="add-new-details">
        <label>Friend name:</label>
        <input type="text" value={nameValue} onChange={onChangeName} />
      </div>
      <div className="add-new-details">
        <label>Image URL:</label>
        <input type="text" value={urlValue} onChange={onChangeUrl} />
      </div>
      <div className="btn-add-cancel">
        <button className="btn btn-cancel-button" onClick={onCancel}>
          cancel
        </button>
        <button className="btn btn-add-button">Add</button>
      </div>
    </form>
  );
}
