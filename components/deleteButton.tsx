import { MdDelete } from "react-icons/md";

const DeleteButton = ({handleDelete, item}) => {
  return <MdDelete color="red" onClick={() => handleDelete(item)} />;
};
export default DeleteButton;
