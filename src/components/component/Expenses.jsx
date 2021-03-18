import React, { useState, useEffect } from "react";
import Expense from "./Expense";
import { fs } from "../firebase/Firebase";
import { NavLink } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Expenses(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [expenseList, setExpenseList] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let expenseDataRef = null;

  useEffect(() => {
    expenseDataRef = fs.collection("expenses");
    fetchExpense();
  }, []);

  const fetchExpense = () => {
    setIsLoading(true);
    let tempList = [];
    expenseDataRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let docId = doc.id;
          let list = { docId, ...doc.data() };
          tempList.push(list);
        });
        console.log(tempList);
        return tempList;
      })
      .then((tempList) => {
        setExpenseList(tempList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error getting the documents", err);
      });
  };

  const handleADeleteModal = () => {
    setModal(!modal);
  };

  const hideAlert = () => {
    setIsLoading(false);
    setAlert(null);
  };

  const handleAllDelete = () => {
    fs.collection("expenses")
      .doc("/")
      .delete()
      .then(() => {
        console.log("All expenses deleted!");
        setAlert(
          <SweetAlert
            success
            title={"All expenses successfully deleted"}
            onConfirm={hideAlert}
            timeout={1500}
          />
        );
        setModal(!modal);
      })
      .catch((error) => {
        console.log("Error deleting all expenses", error);
      });
  };

  return (
    <div>
      <div className="expenses-header">
        <h3 className="expenses-header__title">Expense List</h3>

        <button className="button button--link" onClick={handleADeleteModal}>
          Delete All
        </button>

        {/* Delete all expenses modal*/}
        <>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Delete all expenses</ModalHeader>
            <ModalBody>Are you sure you want to delete all expenses?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleAllDelete}>
                Confirm
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </div>

      {expenseList.map((expense, i) => {
        return <Expense key={i} expense={expense} />;
      })}

      <NavLink
        to="/add-expense"
        activeClassName="is-active"
        className="header_add-expense__text"
      >
        <Button>Add New Expense</Button>
      </NavLink>
      {alert}
    </div>
  );
}
