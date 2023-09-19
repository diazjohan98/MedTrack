import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function diasEnElMesActual() {
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + 1;

  const diasEnMeses = {
    1: 31,
    3: 31,
    5: 31,
    7: 31,
    8: 31,
    10: 31,
    12: 31,
    4: 30,
    6: 30,
    9: 30,
    11: 30,
    2:
      fechaActual.getFullYear() % 4 === 0 &&
      (fechaActual.getFullYear() % 100 !== 0 ||
        fechaActual.getFullYear() % 400 === 0)
        ? 29
        : 28,
  };

  return diasEnMeses[mesActual] || 0;
}

const dias = [];
const numeroDias = diasEnElMesActual();

for (let i = 1; i <= numeroDias; i++) {
  dias.push(i);
}

const MedTom = [];

for (let i = 0; i < 30; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
  MedTom.push(numeroAleatorio);
}

const midata = {
  labels: dias,
  datasets: [
    {
      label: "Registro de toma de medicamentos",
      data: MedTom,
      tension: 0.5,
      fill: true,
      borderColor: "#5BD654",
      pointRadius: 5,
    },
  ],
};

const misoptions = {}

export default function Chart() {
  return <Line data={midata} options={misoptions}></Line>;
}
