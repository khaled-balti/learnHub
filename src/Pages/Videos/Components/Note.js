import React, { useRef, useState, useEffect } from 'react';
import { addNote, fetchNote } from '../../../api/index';

const Note = ({ setNoteDisplayed, videoId, courseId }) => {
  const noteRef = useRef();
  const [text, setText] = useState('');

  useEffect(() => {
    const cb = async () => {
      try {
        const { data } = await fetchNote(courseId, videoId);
        setText(data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };
    cb();
  }, [courseId, videoId]);

  return (
    <div className='container-fluid'>
      <h2 className='text-center mb-2'>What did you learn?</h2>
      <div>
        <textarea
          ref={noteRef}
          defaultValue={text}
          placeholder='Write your note'
          name='note'
          style={{
            width: '100%',
            border: '1px solid black',
            height: '500px',
            borderRadius: '10px',
            maxHeight: '700px',
          }}
          className='p-4'
        />
      </div>
      <div className='d-flex justify-content-around align-items-center'>
        <button
          className='px-4 fw-bold fs-6'
          style={{ backgroundColor: '#eef', color: '#215ca6', height: '50px', borderRadius: '20px' }}
          onClick={() => setNoteDisplayed(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Note;
