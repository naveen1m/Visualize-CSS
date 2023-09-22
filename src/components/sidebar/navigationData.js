export const navigationData = [
    {
        label: 'Display',
        children: [
            { label: 'First child link', link: '/first' },
            { label: 'Second child Link' },
            {
                label: 'Nested child link',
                children: [
                    { label: 'Nested child 1' },
                    { label: 'Nested child 2' },
                ],
            },
        ],
    },
    {
        label: 'Width and Height',
        children: [
            { label: 'Second 1' },
            { label: 'Second 2' },
        ],
    },
    {
        label: 'Margin and Padding',
        link: '/margin_padding'

    },
    {
        label: "Border",
        link: '/border'
    }
    ,
    {
        label: "Floats"
    }
    ,
    {
        label: "Colors"
    }
    ,
    {
        label: "Background"
    }
    ,
    {
        label: "Font"
    },
    {
        label: "Box Model"
    },
    {
        label: "Positioning"
    },
    {
        label: "Flex Box"
    },
    {
        label: "CSS Grid"
    },
    {
        label: "Media Queries"
    }
];