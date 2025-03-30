export const snippitData = [
    {
        key: "title_section",
        title: "Document Title",
        code: "# Document Title",
        output: [{
            "text": [
                {
                    "text": " Document Title ",
                    "fontSize": 33.599999999999994
                }
            ],
            "fontSize": 33.599999999999994,
            "bold": true
        }]
    },
    {
        key: "introduction",
        title: "Introduction",
        code: "# Introduction\nThis document provides an overview of the topic.",
        output: [
            {
                "text": [
                    {
                        "text": " Introduction ",
                        "fontSize": 33.599999999999994
                    }
                ],
                "fontSize": 33.599999999999994,
                "bold": true
            },
            {
                "text": [
                    {
                        "text": " This document provides an overview of the topic ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "bullet_points",
        title: "Key Features",
        code: "# Key Features\n* Feature One\n* Feature Two\n* Feature Three",
        output:[
            {
                "text": [
                    {
                        "text": " Key Features ",
                        "fontSize": 33.599999999999994
                    }
                ],
                "fontSize": 33.599999999999994,
                "bold": true
            },
            {
                "text": [
                    {
                        "text": " • Feature One ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            },
            {
                "text": [
                    {
                        "text": " • Feature Two ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            },
            {
                "text": [
                    {
                        "text": " • Feature Three ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "bold_text",
        title: "Bold Text",
        code: "**This is bold text**",
        output: [
            {
                "text": [
                    {
                        "text": " This is bold text ",
                        "bold": true,
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "italic_text",
        title: "Italic Text",
        code: "/This is italic text/",
        output:  [
            {
                "text": [
                    {
                        "text": " This is italic text ",
                        "italics": true,
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "underline_text",
        title: "Underlined Text",
        code: "__This is underlined text__",
        output: [
            {
                "text": [
                    {
                        "text": " This is underlined text ",
                        "decoration": "underline",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "strikethrough_text",
        title: "Strikethrough Text",
        code: "=This is strikethrough text=",
        output: [
            {
                "text": [
                    {
                        "text": " This is strikethrough text ",
                        "decoration": "lineThrough",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "link_example",
        title: "Link Example",
        code: "[link][Click here]",
        output:[
            {
                "text": [
                    {
                        "text": " link ",
                        "fontSize": "24"
                    },
                    {
                        "text": " Click here ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    {
        key: "quote_block",
        title: "Quote Block",
        code: "# Quote\n> This is an inspirational quote.",
        output: [
            {
                "text": [
                    {
                        "text": " Quote ",
                        "fontSize": 33.599999999999994
                    }
                ],
                "fontSize": 33.599999999999994,
                "bold": true
            },
            {
                "text": [
                    {
                        "text": " This is an inspirational quote ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    },
    // {
    //     key: "code_snippet",
    //     title: "Code Example",
    //     code: "# Code Example\n```\nfunction hello() {\n    console.log('Hello, world!');\n}\n```"
    // },
    // {
    //     key: "table_structure",
    //     title: "Data Table",
    //     code: "# Data Table\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Data A   | Data B   | Data C   |"
    // },
    // {
    //     key: "image_section",
    //     title: "Image Section",
    //     code: "# Image\n![alt text](image_url)"
    // },
    // {
    //     key: "todo_list",
    //     title: "To-Do List",
    //     code: "# Tasks\n* [ ] Task 1\n* [x] Task 2 (completed)"
    // },
    {
        key: "summary_section",
        title: "Summary",
        code: "# Summary\nThis section provides a recap of key points.",
        output: [
            {
                "text": [
                    {
                        "text": " Summary ",
                        "fontSize": 33.599999999999994
                    }
                ],
                "fontSize": 33.599999999999994,
                "bold": true
            },
            {
                "text": [
                    {
                        "text": " This section provides a recap of key points ",
                        "fontSize": "24"
                    }
                ],
                "fontSize": "24"
            }
        ]
    }
];