'use client'

// Chart component using Chart.js

import React, { useRef, useEffect, useMemo, useState } from 'react'
import Chart from 'chart.js/auto'

export default function ChartComponent({ color = 'red', title = 'Custom Chart Title', scores = [] }) {
  const chartRef = useRef(null)

  const mean = useMemo(() => {
    if (scores.length === 0) return
    const mean = scores.reduce((acc, value) => acc + value, 0) / scores.length
    return Math.round(mean * 100) / 100 // arrondi à 2 chiffres après la virgule
  }, [scores])


  const hist = useMemo(() => {
    if (scores.length === 0) return

    /// Création de l'objet de fréquence
    const frequency = {};

    // Comptage des fréquences par intervalle
    scores.forEach(value => {
      const index = Math.floor(value);
      if (frequency[index]) {
        frequency[index]++;
      } else {
        frequency[index] = 1;
      }
    });

    const hist = [];
    for (let i = 1; i <= 7; i++) {
      const percent = (frequency[i] || 0) / scores.length * 100;
      hist.push(percent || 0);

    }

    return hist

  }, [scores])

  useEffect(() => {
    // Si le canvas n'est pas encore chargé ou si l'histogramme n'est pas encore calculé, on ne fait rien
    if (!chartRef.current || !hist) return

    // Création du graphique
    const data = {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: 'Mean',
          data: [{ x: mean, y: 0 }, { x: mean, y: 50 }],
          borderColor: 'white',
          backgroundColor: 'white',
          borderWidth: 1,
          tension: 0.4,
          fill: true
        },
        {
          label: '% of people',
          data: hist,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 1,
          tension: 0.4,
          fill: true
        },

      ]
    }

    const context = chartRef.current.getContext('2d')

    const myChart = new Chart(context, {
      type: 'line',
      data: data,
      options: {
        aspectRatio: 1,
        pointStyle: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 50,
            title: {
              display: true,
              text: 'Frequency (%)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Scores'
            },
            type: 'linear',
            position: 'bottom',
            ticks: {
              min: 1,  // Définir la valeur minimale de l'axe x
              max: 7,  // Définir la valeur maximale de l'axe x
              stepSize: 1,  // Le pas entre chaque tick (pour les nombres entiers 1-7)
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: title
          }
        }
      }
    })

    return () => myChart.destroy()
  }, [hist, color, title, mean])
  return (
    <div className='relative flex w-48 h-48 items-center justify-center'>
      <canvas ref={chartRef} />
    </div>
  )
}
