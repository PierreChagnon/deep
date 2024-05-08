'use client'

// Chart component using Chart.js

import React, { useRef, useEffect, useMemo, useState } from 'react'
import Chart from 'chart.js/auto'

export default function ChartComponent({ color = 'red', title = 'Custom Chart Title', scores = [], userScore = 0, scores_100 = [], userScore_100 = 0 }) {
  const chartRef = useRef(null)
  // console.log("scores_100 = " + scores_100)
  console.log("userScore_100 = " + userScore_100 + color)

  const topPercent = useMemo(() => {
    if (scores_100.length === 0) return

    const top = scores_100.filter(score => score >= userScore_100).length
    const topPercent = top / scores_100.length * 100
    const topPercentRounded_1 = Math.round(topPercent * 10) / 10
    return topPercentRounded_1
  }, [scores_100, userScore_100])

  const hist = useMemo(() => {
    if (scores_100.length === 0) return

    // Création de l'objet de fréquence
    const frequency = {};
    for (let i = 0; i < scores_100.length; i++) {
      const score = scores_100[i];
      const index = Math.floor(score / 10) * 10;
      if (frequency[index]) {
        frequency[index]++;
      } else {
        frequency[index] = 1;
      }
    }

    // // Comptage des fréquences par intervalle
    // scores_100.forEach(value => {
    //   const index = Math.floor(value);
    //   if (frequency[index]) {
    //     frequency[index]++;
    //   } else {
    //     frequency[index] = 1;
    //   }
    // });

    // console.log("frequency = " , frequency)

    const hist = [];
    Object.keys(frequency).forEach(key => {
      hist.push(frequency[key] / scores_100.length * 100);
    });
    // for (let i = 0; i <= 9; i++) {
    //   const percent = (frequency[i] || 0) / scores_100.length * 100;
    //   hist.push(percent || 0);

    // }

    return hist

  }, [scores_100])

  useEffect(() => {
    // Si le canvas n'est pas encore chargé ou si l'histogramme n'est pas encore calculé, on ne fait rien
    if (!chartRef.current || !hist) return


    const context = chartRef.current.getContext('2d');

    // Créer un gradient vertical
    const gradient = context.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.4, color + '80');
    gradient.addColorStop(1, 'transparent');


    // Création du graphique
    const data = {
      labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      datasets: [
        {
          label: 'Your score',
          data: [{ x: userScore_100, y: 0 }, { x: userScore_100, y: 50 }],
          borderColor: 'white',
          backgroundColor: 'white',
          borderWidth: 1,
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Number of people',
          data: hist,
          borderColor: color,
          backgroundColor: gradient,
          borderWidth: 1,
          tension: 0.4,
          fill: true
        },

      ]
    }

    data.datasets[0].pointStyle = false

    const myChart = new Chart(context, {
      type: 'line',
      data: data,
      options: {
        aspectRatio: 1,
        pointStyle: false,
        responsive: false,
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
              min: 0,  // Définir la valeur minimale de l'axe x
              max: 100,  // Définir la valeur maximale de l'axe x
              stepSize: 10,  // Le pas entre chaque tick (pour les nombres entiers 1-7)
            }
          }
        },
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: title
          },
          tooltip: {
            enabled: true,
            intersect: false,
            callbacks: {
              label: function (tooltipItem) {
                // Personnaliser ici le texte affiché
                if (tooltipItem.datasetIndex === 0) {
                  return ''
                }
                let label = tooltipItem.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += `${tooltipItem.parsed.y.toFixed(2)}%`; // Format avec deux décimales
                return label;
              },
              title: function (tooltipItems) {
                // Accéder au premier élément du tableau tooltipItems
                const tooltipItem = tooltipItems[0];
                if (tooltipItem.datasetIndex === 0) {
                  const score = tooltipItem.parsed.x.toFixed(2);
                  return `Your score: ${score}`;
                }
                // Personnaliser ici le titre
                return `Score: ${tooltipItem.label}`;
              },
            }
          }
        }
      },
      plugins: [{
        id: 'textCenter',
        afterDraw: chart => {
          const ctx = chart.ctx;
          const xAxis = chart.scales['x'];
          const yAxis = chart.scales['y'];
          ctx.save();
          ctx.textAlign = 'start';
          ctx.fillStyle = 'white';
          ctx.font = 'bold 12px Arial';
          ctx.fillText(topPercent < 50 ? 'You are top ' + topPercent + ' %' : 'You are bottom ' + topPercent + ' %', chart.width / 2, yAxis.getPixelForValue(40) - 10);
          ctx.restore();
        }
      }]
    })

    return () => myChart.destroy()
  }, [hist, color, title, userScore_100, topPercent])
  return (
    <div className='relative flex w-48 h-48 items-center justify-center'>
      <canvas ref={chartRef} />
    </div>
  )
}
