
const ListItem = (props) => {
    return (
        <div>
            <input type="checkbox" name="checkboxOne" id="checkbox" />
            <p>{props.listitem}</p>
            <input type="button" value="Delete" />
        </div>
    );
};

export default ListItem;
