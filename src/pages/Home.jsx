import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import User from "../components/User";
import Chart from "chart.js/auto";
import faker from "faker";

const Home = () => {
  const labels = ["Personas con 59", "Personas con 49", "Personas con 69"];

  const data = {
    labels,
    datasets: [
      {
        label: "Personas con 59",
        data: labels.map(() => faker.datatype.number({ max: 1000 })),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Personas con 59",
        data: labels.map(() => faker.datatype.number({ max: 1000 })),
        backgroundColor: "rgb(55, 99, 132)",
      },
      {
        label: "Personas con 59",
        data: labels.map(() => faker.datatype.number({ max: 1000 })),
        backgroundColor: "rgb(145, 99, 132)",
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl p-4">
      <h3 className="text-white text-xl  my-4">Clientes</h3>
      <section className="flex gap-1 text-white">
        <div className="bg-primary p-4 py-10  rounded-lg w-full">
          <p className="text-4xl font-bold">14</p>
          <h3 className="font-semibold text-xl">Clientes nuevos</h3>
        </div>
        <div className="bg-strongBlue p-4 py-10  rounded-lg w-full">
          <p className="text-4xl font-bold">29</p>
          <h3 className="font-semibold text-xl">Clientes pendientes</h3>
        </div>
      </section>

      <h3 className=" text-white text-xl  my-4">Mensajes</h3>
      <section className="relative flex gap-1 text-white">
        <div className="bg-blueKing p-4 py-10  rounded-lg w-full">
          <p className="text-4xl font-bold">2</p>
          <h3 className="font-semibold text-xl">Mensajes no leidos</h3>
        </div>

        <div className="absolute -top-1  -right-1 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
      </section>

      <h3 className="text-white text-xl my-4 ">Clientes</h3>

      <section className="flex gap-1 text-white ">
        <div className="bg-primary p-4 py-10  rounded-lg w-full">
          <p className="text-4xl font-bold">14</p>
          <h3 className="font-semibold text-xl">Clientes nuevos</h3>
        </div>
        <div className="bg-strongBlue p-4 py-10  rounded-lg w-full">
          <p className="text-4xl font-bold">29</p>
          <h3 className="font-semibold text-xl">Clientes pendientes</h3>
        </div>
      </section>
      {/* <div className="w-3/4 h-1/3 p-2 ">
        <h3 className="text-white">Clientes nuevos</h3>

        <Bar
          width={340}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
          data={{
            labels: [
              "Lunes",
              "Martes",
              "Miercoles",
              "Jueves",
              "Viernes",
              "Sabado",
              "Domingo",
            ],
            datasets: [
              {
                label: "Numero de clientes",
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: "Quantity",
              //   data: [100, 103, 67, 56, 50, 50],
              //   backgroundColor: "orange",
              //   borderColor: "red",
              // },
            ],
          }}
        />
      </div>

      <div className="w-3/4 h-2/4 p-2 mt-10">
        <h3 className="text-white">Clientes pendientes</h3>
        <Doughnut
          width={340}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
          data={{
            labels: [
              "Lunes",
              "Martes",
              "Miercoles",
              "Jueves",
              "Viernes",
              "Sabado",
              "Domingo",
            ],
            datasets: [
              {
                label: "Numero de clientes",
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: "Quantity",
              //   data: [100, 103, 67, 56, 50, 50],
              //   backgroundColor: "orange",
              //   borderColor: "red",
              // },
            ],
          }}
        />
      </div> */}
    </div>
  );
};

export default Home;
