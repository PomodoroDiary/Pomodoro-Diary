import { useState } from 'react'
import styles from './DiaryList.module.css';

export interface Diary {
  id: number;
  title: string;
  date: number;
  content: string;
}

function DiaryList() {
  const [diarys, setDiarys] = useState<Diary[]>([
    { id: 1, title: '첫 번째 일기', date: 1684304759352, content: '첫 번째 일기입니다!' },
    { id: 2, title: '두 번째 일기', date: 1684305767156, content: '두 번째 일기입니다!' },
    { id: 3, title: '세 번째 일기', date: 1684305769940, content: '세 번째 일기입니다!' },
    { id: 4, title: '네 번째 일기', date: 1684305779302, content: '네 번째 일기입니다!' },
  ]);

  const recentedDiarys = diarys.sort((a, b) => b.date - a.date);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {recentedDiarys.map(diary => (
          <li className={styles.item} key={diary.id} onClick={() => console.log(`${diary.title} 열기`)}>
            <h2>{diary.title}</h2>
            <button onClick={(e) => {
              e.stopPropagation();
              console.log('수정')
            }}>수정</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DiaryList;