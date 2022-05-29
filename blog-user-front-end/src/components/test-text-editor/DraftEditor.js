import React from 'react';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyInput = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);

  return <input value={value} onChange={onChange} />;
};

function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}
