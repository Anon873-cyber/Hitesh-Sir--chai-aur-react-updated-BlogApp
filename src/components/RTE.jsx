import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
const RTE = () => {
    return (
        <Editor initialValue='default value'
            init={
                {
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "anchor",
                        "table",
                        "code",
                        "codesample",
                        "image",
                        "media",
                        "imagetools",
                        "toc",
                        "wordcount",
                        "paste",
                        "autoresize",
                        "autosave"
                    ],toolbar: "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help"   


                }
            }
        />
    )
}

export default RTE