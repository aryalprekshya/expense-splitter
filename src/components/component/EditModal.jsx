import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, FormText } from "reactstrap";
import { fs } from "../firebase/Firebase";

const EditModal = ({ data, isModalOpen, onClose }) => {
  const [description, setDescription] = useState(data.expense.description);
  const [amount, setAmount] = useState(data.expense.paidAmount);
  const [paidBy, setPaidBy] = useState(data.expense.paidBy);
  const [paidDate, setPaidDate] = useState(data.expense.paidDate);

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    onClose && !modal && onClose();
  }, [modal]);

  //For error handling
  const [error, setError] = useState({
    descriptionError: "",
    amountError: "",
    paidByError: "",
    paidDate: "",
  });

  const handleCheckErrors = (e) => {
    e.preventDefault();
    let tempError = {};
    let hasError = false;

    if (!description) {
      tempError = {
        ...tempError,
        descriptionError: "* Must enter description",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, descriptionError: "" };
    }

    if (!amount) {
      tempError = {
        ...tempError,
        amountError: "* Must enter paid amount",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, amountError: "" };
    }

    if (!paidBy) {
      tempError = {
        ...tempError,
        paidByError: "* Must enter person's name who paid the amount",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, paidByError: "" };
    }

    if (!paidDate) {
      tempError = {
        ...tempError,
        paidDateError: "* Must enter amount paid date",
      };
      hasError = true;
    } else {
      tempError = { ...tempError, paidDateError: "" };
    }

    if (hasError) {
      setError({ ...error, ...tempError });
    } else {
      handleUpdateExpense(e);
    }
  };

  const handleUpdateExpense = (e) => {
    e.preventDefault();
    let docId = data.expense.docId;
    console.log(docId);
    let dataToSend = {
      description: description,
      paidAmount: amount,
      paidBy: paidBy,
      paidDate: paidDate,
      createdAt: new Date(),
    };

    // updating expense data to firebase
    fs.collection("expenses")
      .doc(`/${docId}`)
      .update(dataToSend)
      .then(() => {
        console.log("Expense successfully updated");
        onClose();
      })

      .catch((error) => {
        console.log("Error while updating expense", error);
      });
  };

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Edit Expense</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setError({ ...error, descriptionError: "" });
                }}
              />
              <FormText>{error.descriptionError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Amount</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError({ ...error, amountError: "" });
                }}
              />
              <FormText>{error.amountError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Paid By</label>
              <input
                type="text"
                value={paidBy}
                onChange={(e) => {
                  setPaidBy(e.target.value);
                  setError({ ...error, paidByError: "" });
                }}
              />
              <FormText>{error.paidByError}</FormText>
            </FormGroup>
            <FormGroup>
              <label>Paid Date</label>
              <input
                type="date"
                value={paidDate}
                onChange={(e) => {
                  setPaidDate(e.target.value);
                  setError({ ...error, paidDateError: "" });
                }}
              />
              <FormGroup>{error.paidDateError}</FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleCheckErrors}>
            Update Expense
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EditModal;
