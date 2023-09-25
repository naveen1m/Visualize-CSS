export const navigationData = [
    {
        label: 'Get started',
        link: '/getstarted'
    },
    {
        label: 'CSS Selector',
        link: '/selector'
    },
    {
        label: 'Display',
        link: '/display'
        // children: [
        //     { label: 'First child link', link: '/first' },
        //     { label: 'Second child Link' },
        //     {
        //         label: 'Nested child link',
        //         children: [
        //             { label: 'Nested child 1' },
        //             { label: 'Nested child 2' },
        //         ],
        //     },
        // ],
    },
    {
        label: 'Fonts',
        children: [
            { label: 'Font families' },
            { label: 'Font Size' },
            { label: 'Font style' },
            { label: 'Text decoration' }
        ],
    },
    {
        label: 'Colors',
        children: [
            { label: 'color values' },
        ]

    },
    {
        label: "Background",
        children: [
            { label: 'Background image' },
            { label: 'Background positioning' },
            { label: 'Background repeat and size' },
            { label: 'Background shorthand' },
        ]
    }
    ,
    {
        label: "Images",
        children: [
            { label: 'Image Positioning' },
            { label: 'Image Size' },
            { label: 'Image Borders' },
        ]
    }
    ,
    {
        label: "Width and Height"
    }
    ,
    {
        label: "Box Model",
        children: [
            { label: 'Content' },
            { label: 'Padding' },
            { label: 'Border' },
            { label: 'Margin' },
        ]
    }
    ,
    {
        label: "Positioning"
    },
    {
        label: "Float",
        children: [
            { label: 'Float property' },
            { label: 'Clear property' },
        ]
    },
    {
        label: "Flex box"
    },
    {
        label: "CSS Grid"
    },
    {
        label: "Media Queries"
    }
];