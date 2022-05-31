import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React, { useEffect } from 'react';

export default function FormPlugins({ value, readOnly }): React.ReactElement {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (value && editor && readOnly) {
      const initialEditorState = editor.parseEditorState(value);
      editor.setEditorState(initialEditorState);
    }
  }, [value, editor, readOnly]);

  return <></>;
}
