import React, { useState, useEffect, useContext } from "react";
import Expense from "./Expense";
import ExpenseContext from "../context/ExpenseContext";
import { fs } from "../firebase/Firebase";
import { NavLink } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";

export default function Expenses(props) {
  const [expense, expenseDispatch] = useContext(ExpenseContext);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [expenseList, setExpenseList] = useState([]);
  const [total, setTotal] = useState(0);

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
        // console.log(tempList);
        return tempList;
      })
      .then((tempList) => {
        //saving fetched expenses to the context
        //console.log(tempList);
        expenseDispatch({
          type: "SAVE_EXPENSES",
          payload: {
            expenses: tempList,
          },
        });
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

  const handleCalculation = () => {
    let sum = 0;
    console.log("Calculate total button clicked");
    //console.log(expense);
    expense.expenses.map((e) => {
      return (sum += Number(e.paidAmount));
    });
    //console.log(sum);
    setTotal(sum);
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
      <Button onClick={handleCalculation}> Calculate Total</Button>
      <Label>Total is {total}</Label>
      {alert}
    </div>
  );
}
