import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface WorkInputInterface {
  value?: string;
  onChange?: (val: string) => void;
}
export const WordInput = (props: WorkInputInterface) => {
  const initVal =
    props?.value || '<p>This is the initial content of the editor.</p>';
  const editorRef = useRef(null);
  useEffect(() => {
    console.log(editorRef?.current);
    setValue(editorRef?.current?.getContent());
  }, [
    editorRef?.current?.getContent(),
    editorRef.current,
    editorRef.current?.value,
  ]);
  const [value, setValue] = useState('');
  return (
    <Editor
      value={props.value}
      onEditorChange={(i, j) => {
        setValue(i);
        props.onChange(i);
      }}
      apiKey="u87w6ua4zioy9w1rf6wtfqdxudtp7jwcrxvg23jis0mm4c60"
      onInit={(evt, editor) => () => {
        editorRef.current = editor;
        props.onChange(initVal);
      }}
      onPostRender={() => {
        props.onChange(initVal);
      }}
      initialValue={initVal}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'image media video advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help media image',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      }}
    />
  );
};
