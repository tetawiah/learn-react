import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amt, pur) {
        return {
          payload: {
            amt,
            pur,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amt;
        state.loanPurpose = action.payload.pur;
        state.balance += state.loan;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export function deposit(amount, currency) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };

  return async function convert(dispatch, getState) {
    dispatch({ type: "convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const converted = data.rates.USD;
    console.log(converted);

    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}
export default accountSlice.reducer;

//
// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         createdAt: action.payload.createdAt,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return;
//       return {
//         ...state,
//         loan: action.payload.amt,
//         loanPurpose: action.payload.pur,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }
// //

//
// export function withdraw(amount) {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// }
//
// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amt: amount,
//       pur: purpose,
//     },
//   };
// }
//
// export function payLoan() {
//   return {
//     type: "account/payLoan",
//   };
// }
//
