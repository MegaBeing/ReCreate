export const defineTheme = () => {
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs-dark", 
      inherit: true,
      rules: [
        { token: "comment", foreground: "6A9955", fontStyle: "italic" }, // For comments inside code blocks
        { token: "keyword", foreground: "569CD6", fontStyle: "bold" }, // Not much use in Markdown, but just in case
        { token: "string", foreground: "CE9178" }, // Inline code and links
        { token: "number", foreground: "B5CEA8" }, // Ordered lists
        { token: "type", foreground: "4EC9B0", fontStyle: "bold" }, // Headers (#, ##, ###, etc.)
        { token: "metatag", foreground: "DCDCAA", fontStyle: "italic" }, // Blockquotes (>)
        { token: "bold", foreground: "FFD700", fontStyle: "bold" }, // Bold text (**bold**)
        { token: "italic", foreground: "D4D4D4", fontStyle: "italic" }, // Italic text (*italic*)
        { token: "variable", foreground: "9CDCFE" } // Inline code (`code`)
      ],
      colors: {
        "editor.background": "#495057",
        "editor.foreground": "#FFFFFF",
        "editor.lineHighlightBackground": "#48596e",
        "editor.selectionBackground": "#264f78",
        "editorCursor.foreground": "#FFFFFF",
        "editorGutter.background": "#343A40",
      },
    });

    monaco.editor.setTheme("myCustomTheme");
  };