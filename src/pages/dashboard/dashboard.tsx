import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { db } from "../../firebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [incomes, setIncomes] = useState<number[]>([]);
  const [expensesList, setExpensesList] = useState<number[]>([]);

  useEffect(() => {
    const unsubscribeIncomes = onSnapshot(collection(db, "incomes"), (snapshot) => {
      const incomesData = snapshot.docs.map((doc) => doc.data().amount);
      setIncomes(incomesData);
    });

    const unsubscribeExpenses = onSnapshot(collection(db, "expenses"), (snapshot) => {
      const expensesData = snapshot.docs.map((doc) => doc.data().amount);
      setExpensesList(expensesData);
    });

    return () => {
      unsubscribeIncomes();
      unsubscribeExpenses();
    };
  }, []);

  const addIncome = async () => {
    try {
      await addDoc(collection(db, "incomes"), { amount: income });
      setIncomes([...incomes, income]);
      setIncome(0);
    } catch (error) {
      console.error("Erro ao adicionar renda: ", error);
    }
  };

  const addExpense = async () => {

    try {
      await addDoc(collection(db, "expenses"), { amount: expenses });
      setExpensesList([...expensesList, expenses]);
      setExpenses(0);
    } catch (error) {
      console.error("Erro ao adicionar despesa: ", error);
    }
  };

  const totalIncomes = incomes.reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = expensesList.reduce((acc, curr) => acc + curr, 0);
  const saldoAtual = totalIncomes - totalExpenses; 

  const data = {
    labels: ["Entradas", "Saídas"],
    datasets: [
      {
        label: "Total",
        data: [totalIncomes, totalExpenses],
        backgroundColor: ["#4CAF50", "#FF6384"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard Financeiro</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Adicionar Renda"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
          style={{ padding: "10px", width: "300px", fontSize: "16px", marginRight: "10px" }}
        />
        <button
          onClick={addIncome}
          style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Adicionar Renda
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Adicionar Despesa"
          value={expenses}
          onChange={(e) => setExpenses(parseFloat(e.target.value))}
          style={{ padding: "10px", width: "300px", fontSize: "16px", marginRight: "10px" }}
        />
        <button
          onClick={addExpense}
          style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#FF6384", color: "white", border: "none", cursor: "pointer" }}
        >
          Adicionar Despesa
        </button>
      </div>

      <div style={{ width: "500px", margin: "0 auto" }}>
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: "Entradas e Saídas",
              },
            },
          }}
        />
      </div>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p><strong>Total de Entradas:</strong> R$ {totalIncomes.toFixed(2)}</p>
        <p><strong>Total de Saídas:</strong> R$ {totalExpenses.toFixed(2)}</p>
        <p><strong>Saldo Atual:</strong> R$ {saldoAtual.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Dashboard;
