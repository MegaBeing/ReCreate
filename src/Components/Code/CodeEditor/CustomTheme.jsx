export const defineTheme = () => {
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs-dark", 
      inherit: true,
      rules: [
        { token: "comment", foreground: "6A9955", fontStyle: "italic" },
        { token: "keyword", foreground: "569CD6", fontStyle: "bold" },
        { token: "string", foreground: "CE9178" },
        { token: "number", foreground: "B5CEA8" },
        { token: "function", foreground: "DCDCAA" },
      ],
      colors: {
        "editor.background": "#495057",
        "editor.foreground": "#FFFFFF",
        "editor.lineHighlightBackground": "#48596e",
        "editor.selectionBackground": "#264F78",
        "editorCursor.foreground": "#FFFFFF",
        "editorGutter.background": "#343A40",
      },
    });

    monaco.editor.setTheme("myCustomTheme");
  };