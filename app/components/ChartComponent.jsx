'use client'

// Chart component using Chart.js

import React, { useRef, useEffect, useMemo, useState } from 'react'
import Chart from 'chart.js/auto'
import { discoveringScores, expandingScores, experimentingScores, performingScores } from '../utils/deepData'

export default function ChartComponent({ color = 'red', title = 'Custom Chart Title' }) {
  const chartRef = useRef(null)
  const [scores, setScores] = useState([])

  useEffect(() => {
    switch (title) {
      case 'Discovering':
        setScores(discoveringScores)
        break
      case 'Expanding':
        setScores(expandingScores)
        break
      case 'Experimenting':
        setScores(experimentingScores)
        break
      case 'Performing':
        setScores(performingScores)
        break
      default:
        break
    }
  }, [title])
  const hist = useMemo(() => {
    if (scores.length === 0) return
    console.log('starting histogram calculation...')

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
      hist.push(frequency[i] || 0);
    }

    console.log('histogram calculated:', hist)
    return hist

  }, [scores])

  useEffect(() => {
    if (!chartRef.current || !hist) return
    console.log('create chart...')
    const data = {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: 'My First Dataset',
          data: hist,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 1,
          tension: 0.4,
          fill: true
        }
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
            beginAtZero: true
          },
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
  }, [hist, color, title])
  return (
    <div className='relative md:w-48 md:h-48'>
      <canvas ref={chartRef} />
    </div>
  )
}
