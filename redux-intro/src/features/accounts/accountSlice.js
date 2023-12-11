const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        createdAt: action.payload.created_at,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amt,
        loanPurpose: action.payload.pur,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

export function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amt: amount,
      pur: purpose,
    },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}

//
// store.dispatch(deposit(600));
// console.log(store.getState());
// store.dispatch(withdraw(100));
// console.log(store.getState());
// store.dispatch(requestLoan(500, "For wetin no concern you"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());
