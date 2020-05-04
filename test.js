function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  let totalCidArr = [];

  let changeArr = [];
  const values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const sortedCid = cid.reverse();
  const insufficientFunds = { status: "INSUFFICIENT_FUNDS", change: [] };
  const closed = { status: "CLOSED", change: `${cid}` };
  let open = {
    status: "OPEN",
    change: `${changeArr}`,
  };

  const changeDistributed = () => {
    let changeVal = change;
    let usableValues = values.filter((item) => item <= change);
    let res = {};
    for (let i = 0; i < usableValues.length; i++) {
      let val = usableValues[i];
      if (val <= changeVal) {
        res[val] = Math.floor(changeVal / val);
        changeVal -= val * res[val];
      }
    }

    if (Object.keys(res)[0] === "0.01") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["PENNY", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "0.05") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["NICKEL", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "0.1") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["DIME", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "0.25") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["QUARTER", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "1") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["ONE", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "5") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["FIVE", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "10") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["TEN", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "20") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["TWENTY", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    } else if (Object.keys(res)[0] === "100") {
      let coins = Object.values(res);
      let coinAmount = coins[0] * Number(Object.keys(res)[0]);
      changeArr = [["ONE HUNDRED", coinAmount]];
      open = {
        status: "OPEN",
        change: `[${changeArr}]`,
      };
      console.log(open);
    }
  };

  for (let i = cid.length - 1; i > -1; i--) {
    totalCidArr = [cid[i][1], ...totalCidArr];
  }

  const totalCid = totalCidArr.reduce((total, num) => total + num).toFixed(2);

  if (totalCid < change) {
    console.log(insufficientFunds);
    return insufficientFunds;
  } else if (totalCid == change) {
    console.log(closed);
    return closed;
  } else if (totalCid > change) {
    changeDistributed();
  }

  return change;
}

checkCashRegister(19.5, 25, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
