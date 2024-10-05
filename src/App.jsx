import { useState } from 'react';
import diaryData from './diaryData';
import DiaryCard from './components/DiaryCard';
import Menu from './components/Menu';
import './styles.css';

export default function App() {
  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>

        {diaryData.map(entry => (
          <DiaryCard
            key={entry.id}
            date={entry.date}
            rating={entry.rating}
            emotions={entry.emotions}
            activities={entry.activities}
            note={entry.note}
          />
        ))}
      </main>
    </div>
  );
}
