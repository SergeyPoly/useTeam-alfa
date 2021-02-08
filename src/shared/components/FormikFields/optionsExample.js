export const fieldOptions = {
    text: {
        name: 'text',
        type: 'text',
        label: 'Text input', //not required
        placeholder: 'type something', //not required
        additionalContainerClass: 'my-custom-class' //not required
    },
    textarea: {
        name: 'textarea',
        type: 'textarea',
        label: 'Text area' //not required
    },
    radio1: {
        name: 'radio', //should be the same for all items in block
        type: 'radio',
        label: 'Active', //required!
        value: 'active' //required!
    },
    radio2: {
        name: 'radio',
        type: 'radio',
        label: 'Disabled',
        value: 'disabled'
    },
    checkbox1: {
        name: 'checkbox', //should be the same for all items in block
        type: 'checkbox',
        label: 'Europe', //required!
        value: 'europe' //required!
    },
    checkbox2: {
        name: 'checkbox',
        type: 'checkbox',
        label: 'Asia',
        value: 'asia'
    },
    select: {
        label: 'Choose something for beer:', //not required
        name: 'select',
        options: [
            { value: 'chips', label: 'Pringles' },
            { value: 'fish', label: 'Stavridka' },
            { value: 'meat', label: 'Dry meat' }
        ] //same structure required!
    }
};
