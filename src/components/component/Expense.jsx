import React, { useState } from "react";
import { fs } from "../firebase/Firebase";
import EditModal from "./EditModal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

export default function Expense(props) {
  let expenseDataRef = null;
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleEdit = () => {
    console.log("edit button clicked", isOpen);
    setIsOpen(!isOpen);
  };

  const hideAlert = () => {
    setIsLoading(false);
    setAlert(null);
  };

  const handleDelete = (Id) => {
    expenseDataRef = fs.collection("expenses");
    expenseDataRef
      .doc(`/${Id}`)
      .delete()
      .then(() => {
        console.log("Expense Deleted successfully");
        setAlert(
          <SweetAlert
            title={"Expense successfully deleted"}
            onConfirm={hideAlert}
            timeout={1500}
          />
        );
        setModal(!modal);
      })
      .catch((error) => {
        console.log("Error deleting expense", error);
      });
  };

  const handleDeleteModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="expense">
        <div className="expense__text">
          <p>
            {props.expense.description}, {props.expense.paidAmount},{" "}
            {props.expense.paidBy}{" "}
          </p>
        </div>
        <div>
          <Button
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              handleDeleteModal();
            }}
          >
            Delete
          </Button>
          {/* Delete a single expense modal*/}
          <div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Delete Expense</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this expense?
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    handleDelete(props.expense.docId);
                  }}
                >
                  Confirm
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
      {isOpen && (
        <EditModal
          data={props}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}
